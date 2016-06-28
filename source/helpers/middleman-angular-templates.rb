require "middleman-core"

module Middleman
  module AngularTemplates
    class Extension < ::Middleman::Extension
      
      helpers do 
        def angular_templates_script(path = '')
          ''.tap do |html|
            Dir.glob(File.join(path, "/**/*.erb")) do |file|

              route = Pathname.new(File.basename(file, '.*'))
              source = Pathname(config.source)
              
              parsed_content = ERB.new(File.read(file)).result(binding)
              
              html << content_tag(
                :script,
                parsed_content,
                type: 'text/ng-template',
                id: "/#{route}"
              )
            end
          end

        end
      end
      
    end
  end
end



::Middleman::Extensions.register(:angular_templates) do
  ::Middleman::AngularTemplates::Extension
end
