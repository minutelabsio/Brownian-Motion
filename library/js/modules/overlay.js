define(
    [
        'jquery',
        'stapes',
        'require',
        'tpl!templates/overlay.tpl'
    ],
    
    function(
        $,
        Stapes,
        require,
        template
    ) {

        'use strict';
        
        var fixedEls = '.sticky' // elements that are position fixed that need to be acounted for
            ,bodyOverlayClass = 'overlay-on' //class added to the body tag when overlay is open
            ,overlayWrapClass = 'overlay-wrap' //class of main overlay wrapper
            ,currentOverlay = null //one open overlay at a time
            ,cache = {}  //overlay cached by content
            ,tplEngine //tplEngine module loaded when required
            ,domReadyOpen = true
            ,$body // body jquery
            ;

        $(function(){

            $body = $('body');

            if ( typeof domReadyOpen === 'function' ){

                // means there was an effort to open an overlay before domready
                // DOM is now ready... now open...
                domReadyOpen();
            }

            domReadyOpen = false;
        });
        
        
        /**
         * Gets the width of the OS scrollbar
         */
        /*! Copyright (c) 2008 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
         * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
         * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
         */
        var scrollbarWidth = false;
        function getScrollbarWidth(){
            if ( scrollbarWidth === false ) {
                if ( $('html.lt-ie9').length ) {
                    var $textarea1 = $('<textarea cols="10" rows="2"></textarea>')
                            .css({ position: 'absolute', top: -1000, left: -1000 }).appendTo($body),
                        $textarea2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>')
                            .css({ position: 'absolute', top: -1000, left: -1000 }).appendTo($body);
                    scrollbarWidth = $textarea1.width() - $textarea2.width();
                    $textarea1.add($textarea2).remove();
                } else {
                    var $div = $('<div />')
                        .css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: -1000 })
                        .prependTo($body).append('<div />').find('div')
                            .css({ width: '100%', height: 200 });
                    scrollbarWidth = 100 - $div.width();
                    $div.parent().remove();
                }
            }
            return scrollbarWidth;
        }
        
        
        /**
         * Helper method to get the first element that is scrollable from the query list
         */
        function getFirstScrollingEl(query){
            
            var $els = $(query)
                ,$el = $els.first()
                ,t = $el.scrollTop()
                ;
            
            if (!$els.length){
                
                return $els;
            }
            
            $el.scrollTop(t - ( t !== 0 ? 2 : -2 ));
            
            if( $el.scrollTop() !== t ){
                
                $el.scrollTop(t);
                return $el;
            }
            
            return getFirstScrollingEl($els.not($el));
        }
        
        /**
         * Helper to render runtime specified tplEngine templates
         *
         * @param {string} tpl The template.
         * @param {object} data The model.
         * @returns {$.Deferred.promise}
         * @method renderTemplate
         * @private
         */
        function renderTemplate(tpl, data){
            
            var dfd
                ;
            
            if ( tplEngine ){
                
                return tplEngine.compile(tpl).render(data);
                
            }
            
            dfd = $.Deferred();
            
            require(['dot'], function(m){
                
                tplEngine = m;
                
                dfd.resolve( renderTemplate(tpl, data) );
                
            });
            
            return dfd.promise();
        }
        
        function Overlay(opts){
            
            this.isOpen = false;
            this.attached = false;
            
            this.setOptions(opts);
            this.init();
        }
        
        Overlay.prototype = {
            
            setOptions: function(opts){
                
                this.config = $.extend( this.config || {
                    
                    //defaults
                    
                    /**
                     * Where to find content.
                     *
                     * Accepts:
                     * - a URL : performs a GET request for content
                     * - a hashtag: assumes it is DOM ID. innerHTML contents becomes content
                     * - plain text (with spaces): raw content
                     */
                    content: false,
                    
                    // type of data to expect from content, passed to $.ajax dataType param.
                    dataType: 'html',

                    // http method to use (if applicable)
                    type: 'GET',
                    
                    // classname added to wrapping element
                    wrapClassName: '',
                    
                    // template (string or compiled template) used to render the overlay.
                    // Default is default template overlay.tmpl
                    template: template,
                    
                    // time to show/hide the overlay
                    duration: 500,

                    // detach element after closing
                    detachOnClose: false,

                    // function to filter data before injecting it into the overlay
                    filter: null
                    
                }, opts );
            },
            
            init: function(){
                
                this.dfds = {}; //deferred cache    
            },

            getDfd: function( id ){

                var dfd = this.dfds[id]
                    ,makenew = (dfd === undefined) || (dfd.state() !== 'pending')
                    ;

                if ( makenew ){

                    dfd = this.dfds[id] = $.Deferred();
                }

                return { 
                    dfd: dfd,
                    init: makenew
                };
            },
            
            // requires this.model to be ready
            render: function(){

                if ( this.el ){
                    return true;
                }
                
                var self = this
                    ,dfdObj = this.getDfd('render')
                    ;
    
                if ( dfdObj.init ){

                    $.when( this.makeModel() ).then(function(){
                        
                        // use template plugin to render it
                        if ( typeof self.config.template === 'string' ){
                            
                            $.when(renderTemplate( self.config.template, self.model )).then(function( result ){
                                
                                self.el = $(result);
                                dfdObj.dfd.resolve(this);
                                
                            });
                            
                        } else { // assume it's a template object with a .render method
                            
                            self.el = $(self.config.template.render( self.model ));
                            dfdObj.dfd.resolve(this);
                            
                        }
                        
                    });
                }
                
                return dfdObj.dfd.promise();
            },
            
            // requires content
            makeModel: function(){

                if ( this.model ){
                    return true;
                }
                
                var self = this
                    ,dfdObj = this.getDfd('makeModel')
                    ;
                
                if ( dfdObj.init ){

                    $.when( this.getContent(true) ).then( function(){
                        
                        //make model
                        self.model = {
                            
                            content: self.content,
                            wrapClassName: overlayWrapClass + ' ' + self.config.wrapClassName
                            
                        };

                        dfdObj.dfd.resolve();
                        
                    });
                }
                
                return dfdObj.dfd.promise();
            },
            
            // noRefresh = true, to use cached content
            getContent: function( noRefresh ){
                
                var self = this
                    ;
                
                if( !this.content || !noRefresh ){
                    
                    //get content
                    if ( typeof this.config.content === 'object' ){ // use as json to render mustage template

                        this.content = this.config.content;
                    
                    } else if ( this.config.content.match(' ') ){ // contains a space. assume plain text
                        
                        this.content = this.config.content;
                        
                    } else if ( this.config.content.match(/^#/) ){ // begins with hash
                        
                        this.content = $( this.config.content ).html();
                        
                    } else { // assume url
                        
                        // return deferred promise
                        return $.ajax({
                            
                            url: this.config.content,
                            type: this.config.type,
                            data: this.config.dataString,
                            dataType: this.config.dataType
                            
                        }).then(function(content){
                            if ($.isFunction(self.config.filter)) {
                                self.content = self.config.filter(content);
                            } else {
                                self.content = content;
                            }
                        });
                    }
                    
                }
                
                return this.content;
            },
            
            attach: function(callback){
                
                var self = this
                    ,dfdObj
                    ;
                
                if (this.attached){
                    
                    if (callback){
                        callback(this);
                    }
                    return this;
                }

                dfdObj = this.getDfd('attach');
                
                if ( dfdObj.init ){

                    $.when( this.render() ).then(function(){
                    
                        if (!self.attached){
                            
                            self.attached = true;
                            self.el.hide().appendTo($body);
                            self.el = self.el.filter(function(){
                                return this.nodeType === 1; //only want HTML elements
                            });
                            
                        }
                        
                        dfdObj.dfd.resolve();
                        if (callback){
                            callback(this);
                        }
                        
                    });
                }
                
                return dfdObj.dfd.promise();
            },
            
            detach: function(callback){
                
                var self = this
                    ,dfdObj
                    ;
                
                if (!this.attached){
                    
                    if (callback){
                        callback(this);
                    }
                    return this;
                }

                dfdObj = this.getDfd('detach');
                
                if ( dfdObj.init ){

                    $.when( this.close() ).then(function(){
                    
                        if (self.attached){
                            
                            self.attached = false;
                            self.el.detach();
                            
                        }
                        
                        dfdObj.dfd.resolve();
                        if (callback){
                            callback(this);
                        }
                        
                    });
                }

                return dfdObj.dfd.promise();
            },
            
            // event binding/delegation
            on: function(){
                
                var self = this
                    ,args = arguments
                    ;
                
                $.when( this.attach() ).then(function(){
                    
                    $.fn.on.apply(self.el, args);
                    
                });
                
            },
            
            open: function(callback){
                
                var self = this
                    ,dfdObj
                    ;
                
                if ( this.isOpen ){
                    
                    if (callback){
                        callback(this);
                    }
                    return this;
                }
                
                dfdObj = this.getDfd('open');

                if ( dfdObj.init ){
                    
                    $.when( this.attach() ).then(function(){
                        
                        //open
                        if ( !self.isOpen ){
                            
                            self.isOpen = true;
                            
                            self.el.css('top', getFirstScrollingEl('html, body').scrollTop() || 0).fadeIn( self.config.duration, function(){
                                
                                dfdObj.dfd.resolve();
                                if (callback){
                                    callback(this);
                                }
                                
                            });
                            
                        } else {
                            
                            if (callback){
                                callback(this);
                            }
                            
                        }
                        
                    });
                }
                
                return dfdObj.dfd.promise();
            },
            
            close: function(callback){
                
                var self = this
                    ,dfdObj
                    ;
                
                if ( !this.isOpen ){
                
                    if (callback){
                        callback(this);
                    }
                    return this;
                }
                
                dfdObj = this.getDfd('close');
                
                if ( dfdObj.init ){

                    this.el.fadeOut( this.config.duration, function(){
                        
                        if (self.config.detachOnClose){
                            self.detach();
                        }
                        if (callback){
                            callback(this);
                        }
                        self.isOpen = false;
                        dfdObj.dfd.resolve();
                        
                    });
                }
                
                return dfdObj.dfd.promise();
            }
        };
        
        
        /* API Methods */
        
        var API = Stapes.subclass({

            /**
             * Open a new overlay.
             *
             * @param {Object} opts Configuration options object passed to Overlay constructor. Extra parameter is "refresh: true" to ignore caching, and "closeButtons: '#selectors'" to specify close button elements.
             * @param {function} callback (optional) Callback to execute after finished opening overlay.
             * @return {overlayAPI}
             * @method open
             */
            open: function(opts, callback){
                
                var self = this
                    ,dfd
                    ,newOverlay
                    ,hashkey = typeof opts.content === 'string'? opts.content : JSON.stringify(opts.content)
                    ;
                
                if (!opts.content){
                
                    throw 'You need to set options.content';
                
                }
                
                if ( domReadyOpen ){

                    // means dom isn't ready... delay open call
                    domReadyOpen = function(){

                        self.open( opts, callback );
                    };

                    return this;
                }

                dfd = $.Deferred();
                newOverlay = cache[hashkey];

                if ( currentOverlay && currentOverlay !== newOverlay ){
                    
                    currentOverlay.detach(dfd.resolve);
                    
                } else {
                    
                    dfd.resolve();
                    
                }
                
                // wait for last overlay to close and detach.
                $.when( dfd.promise() ).then(function(){
                    
                    if ( !opts.refresh && newOverlay ){
                        
                        currentOverlay = newOverlay;
                        
                    } else {
                        
                        if (hashkey in cache){
                            
                            newOverlay.detach();
                            cache[hashkey] = false;
                        }
                        
                        opts = $.extend({
                            // selectors to use to find elements to click on to close the overlay
                            closeButtons: '.close, .inner',
                            
                            // set body overflow: hidden and pad it with scrollbar width to allow scrolling for overlays
                            scrollfix: true
                            
                        }, opts);
                        
                        currentOverlay = cache[hashkey] = new Overlay(opts);
                        
                        // delegate close on click events 
                        currentOverlay.on({
                                
                                click: function(e){
                                    
                                    if( $(e.target).is(opts.closeButtons) ){
                                        
                                        e.preventDefault();
                                        
                                        self.close();
                                    }
                                    
                                }
                                
                            },
                            
                            opts.closeButtons
                        );

                        self.on('open', function(d, e){
                            self.off(e.type, e.handler);
                            self.emit('create', opts);
                        });
                        
                    }
                    
                    
                    //check if body has scrollbar
                    var scrollEl = getFirstScrollingEl('html, body');
                    
                    if ( currentOverlay.config.scrollfix && scrollEl.length ){
                    
                        // account for scrollbars
                        scrollEl.css({
                            
                            'paddingRight': '+='+getScrollbarWidth()+'px'
                        
                        });
                        
                        $body.css('overflow', 'hidden');
                        
                        $(fixedEls).css('width', function(){
                            
                            var $this = $(this);
                            
                            if ( $this.width() < parseInt($this.css('maxWidth'), 10)){
                                
                                return '-='+getScrollbarWidth()+'px';
                            }
                            else {
                                
                                return '';
                            }
                        });
                        
                        //undo when closed
                        var cb;
                        self.on('close', cb = function(){
                            
                            scrollEl.css({
                                    
                                'paddingRight': ''
                                
                            });
                            
                            $body.css('overflow', '');
                            
                            self.off('close', cb);
                        });
                        
                    }
                    
                    $body.addClass( bodyOverlayClass );
                    
                    currentOverlay.open(function(){
                        
                        if (callback){
                            callback();
                        }
                        self.emit('open', self);
                        
                    });
                });
                
                return this;
            },
            
            /**
             * Close the currently open overlay.
             *
             * @param {function} callback (optional) Callback to execute after finished closing overlay.
             * @return {overlayAPI}
             * @method close
             */
            close: function(callback){

                var self = this;

                if ( domReadyOpen ){

                    // if domReadyOpen was a function then remove the function and stop the deferred call to open
                    domReadyOpen = true;
                    return this;
                }
                
                $body.removeClass( bodyOverlayClass );
                
                $(fixedEls).css('width', '');
                
                currentOverlay.close(function(){
                    
                    if (callback){
                        callback();
                    }
                    self.emit('close', self);
                    
                });
                
                return this;
            },
            
            getElement: function(){
                
                if ( currentOverlay ){
                    
                    return currentOverlay.el;
                    
                }
                
                return null;
            }

        });
        
        return new API();
    }
);