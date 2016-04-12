###
# Page options, layouts, aliases and proxies
###

# Require Bootstrap
require 'bootstrap'

# Require Custom Angular Template
require File.join root, 'source/helpers/middleman-angular-templates'

@app_path = File.join root, 'source/app'
@common_path = File.join root, 'source/common'

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
#helpers do 
#  def angular_templates_script
#
#  end
#end

config[:css_dir] = 'assets/sass'
config[:js_dir] = 'assets/js'
config[:images_dir] = 'assets/images'

# Build-specific configuration
configure :build do
  # Ignore helpers folder on build
  ignore 'helpers/*'
  
	# Activate minify HTML
  activate :minify_html

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  #Gzip compression
  activate :gzip
end

# Deploy FTP configuration 
# Find more options here: https://github.com/middleman-contrib/middleman-deploy

#activate :deploy do |deploy|
#  deploy.deploy_method   = :ftp
#  deploy.host            = 'ftp.example.com'
#  deploy.path            = '/srv/www/site'
#  deploy.user            = 'tvaughan'
#  deploy.password        = 'secret'
#end

after_configuration do
  sprockets.append_path @app_path
  sprockets.append_path @common_path
  
  # Bower files
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  @bower_path = File.join root, @bower_config["directory"]
  sprockets.append_path @bower_path
  
  activate :angular_templates
  
  puts ''
  puts '----------------------------------------'
  puts 'BOWER vendor path: \'' + @bower_path + '\''
  puts ''  
  puts 'Include BOWER files with Asset Pipelines:'
  puts 'JS: //= require jquery/dist/jquery at \'source/assets/js/all.js\''
  puts ''  
  puts 'CSS:'  
  puts '/*'
  puts ' *= require your/dist/css'
  puts ' */'
  puts ' at \'source/assets/sass/styles.css.scss\''
  puts '----------------------------------------'
  puts 'App folder path: \'' + @app_path + '\''
  puts 'Common folder path: \'' + @common_path + '\''
  puts ''  
  puts 'Include APP files with Asset Pipelines:'
  puts 'JS: //= require _all at \'source/app/_app.js\''
  puts '----------------------------------------'
  puts ''
  puts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
end

puts ''
puts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
puts ''
puts 'MBAS - Middleman 4 + Bootstrap 4 + Angular + Sass'
puts ''
puts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
