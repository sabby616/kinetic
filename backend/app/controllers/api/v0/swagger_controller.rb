# frozen_string_literal: true

require 'uri'

class Api::V0::SwaggerController < ApplicationController
  include ::Swagger::Blocks

  ACCEPT_HEADER = 'application/json'
  BASE_PATH = '/api/v0'

  swagger_root do
    key :swagger, '2.0'
    info do
      key :version, '0.1.0'
      key :title, 'OpenStax Kenetic API'
      key :description, <<~DESC
        The Kenetic API for OpenStax.

        Requests to this API should include `#{ACCEPT_HEADER}` in the `Accept` header.

        The desired API version is specified in the request URL, e.g. `[domain]#{BASE_PATH}/researcher/studies`. \
        While the API does support a default version, that version will change over \
        time and therefore should not be used in production code!
      DESC
      key :termsOfService, 'https://openstax.org/tos'
      contact do
        key :name, 'support@openstax.org'
      end
      license do
        key :name, 'MIT'
      end
    end
    tag do
      key :name, 'Kenetic'
      key :description, 'Kenetic endpoints'
    end
    key :basePath, BASE_PATH
    key :consumes, [ACCEPT_HEADER]
    key :produces, ['application/json']
  end

  SWAGGERED_CLASSES = [
    Api::V0::SwaggerResponses,
    Api::V0::Researcher::StudiesSwagger,
    Api::V0::Researcher::StudyResearchersSwagger,
    Api::V0::Researcher::StagesSwagger,
    Api::V0::Participant::StudiesSwagger,
    Api::V0::MiscSwagger,
    self
  ].freeze

  def json
    render json: Swagger::Blocks.build_root_json(SWAGGERED_CLASSES)
  end
end
