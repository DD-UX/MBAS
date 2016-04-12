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
              
              File.open(file, "r") do |infile|
                file_content = ""
                while (line = infile.gets)
                  file_content += "#{line}"
                end
                
                parsed_content = ERB.new(file_content).result()
                
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
end



::Middleman::Extensions.register(:angular_templates) do
  ::Middleman::AngularTemplates::Extension
end
