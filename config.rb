# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
project_path = "library"
http_path = "/"
css_dir = "styles"
sass_dir = "styles"
images_dir = "images"
generated_images_dir = "images/generated"
fonts_dir = "fonts"
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
output_style = (environment == :production) ? :compressed : :expanded

relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass . scss && rm -rf sass && mv scss sass
