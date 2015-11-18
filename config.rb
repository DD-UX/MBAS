###
# Page options, layouts, aliases and proxies
###

# Require Bootstrap
require 'bootstrap'

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# Reload the browser automatically whenever files change
configure :development do
  # Create Livereload
  activate :livereload
  
  # Create pretty urls
  activate :directory_indexes

  # Middleman autoprefixer
  activate :autoprefixer
  
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

config[:css_dir] = 'assets/sass'
config[:js_dir] = 'assets/js'
config[:images_dir] = 'assets/images'
config[:app_dir] = 'app'

# Build-specific configuration
configure :build do
	# Activate minify HTML
	activate :minify_html

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  #Gzip compression
  activate :gzip
end

after_configuration do
  sprockets.append_path 'app'
end

puts "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
puts "        Bootstrap 4 Alpha - Test"
puts "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
