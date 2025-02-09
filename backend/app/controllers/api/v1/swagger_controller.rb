# frozen_string_literal: true

require 'uri'

class Api::V1::SwaggerController < ApplicationController
  include ::Swagger::Blocks

  ACCEPT_HEADER = 'application/json'
  BASE_PATH = '/api/v0'

  swagger_root do
    key :swagger, '2.0'
    info do
      key :version, '0.1.0'
      key :title, 'OpenStax Kinetic API'
      key :description, <<~DESC
        The Kinetic API for OpenStax.

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
      key :name, 'Kinetic'
      key :description, 'Kinetic endpoints'
    end
    key :basePath, BASE_PATH
    key :consumes, [ACCEPT_HEADER]
    key :produces, ['application/json']
  end

  SWAGGERED_CLASSES = [
    Api::V1::SwaggerResponses,
    Api::V1::Researcher::StudiesSwagger,
    Api::V1::Researcher::StudyResearchersSwagger,
    Api::V1::Researcher::StagesSwagger,
    Api::V1::Participant::StudiesSwagger,
    Api::V1::EnvironmentSwagger,
    self
  ].freeze

  def json
    render json: Swagger::Blocks.build_root_json(SWAGGERED_CLASSES)
  end
end
