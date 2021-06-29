# frozen_string_literal: true

OpenStax::Swagger.configure do |config|
  config.json_proc = lambda { |api_major_version|
    Swagger::Blocks.build_root_json(
      "::Api::V#{api_major_version}::SwaggerController::SWAGGERED_CLASSES".constantize
    )
  }
  config.client_language_configs = {
    ruby: lambda do |version|
      {
        gemName: 'labs-ruby',
        gemHomepage: 'https://github.com/openstax/labs/backend/clients/ruby',
        gemRequiredRubyVersion: '>= 2.4',
        moduleName: 'OpenStax::Labs',
        gemVersion: version
      }
    end,
    'typescript-fetch' => lambda do
      {

      }
    end
  }.symbolize_keys
end
