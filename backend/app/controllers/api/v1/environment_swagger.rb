# frozen_string_literal: true

class Api::V1::EnvironmentSwagger
  include Swagger::Blocks
  include OpenStax::Swagger::SwaggerBlocksExtensions
  add_properties(:RewardsScheduleSegment) do
    key :required, %w[prize points start_at end_at]
    property :prize do
      key :type, :string
      key :description, 'The Prize that will be awarded for this segment of time'
    end
    property :points do
      key :type, :number
      key :description, 'The number of points needed to be eligible'
    end
    property :start_at do
      key :type, :string
      key :format, 'date-time'
      key :description, 'When the segment starts'
    end
    property :end_at do
      key :type, :string
      key :format, 'date-time'
      key :description, 'When the segment ends'
    end
    property :info_url do
      key :type, :string
      key :format, 'url'
      key :description, 'A link to more information about the reward'
    end
  end
  add_properties(:BannerMessage) do
    key :required, %w[id message start_at end_at]
    property :id do
      key :type, :string
      key :description, 'A unique identifier for the message'
    end
    property :start_at do
      key :type, :string
      key :format, 'date-time'
      key :description, 'When the banner should start to be displayed'
    end
    property :end_at do
      key :type, :string
      key :format, 'date-time'
      key :description, 'When the banner should be hidden'
    end
    property :message do
      key :type, :string
      key :description, 'The message that should be displayed'
    end
  end
  swagger_schema :EnvironmentUser do
    key :required, %w[is_researcher is_administrator]
    property :user_id do
      key :type, :string
      key :format, 'uuid'
      key :description, 'The user\'s ID.'
      key :readOnly, true
    end
    property :is_administrator do
      key :type, :boolean
      key :description, 'If true, the user is an administrator'
      key :readOnly, true
    end
    property :is_researcher do
      key :type, :boolean
      key :description, 'If true, the user is a researcher'
      key :readOnly, true
    end
  end

  swagger_schema :Environment do
    key :required, %w[user accounts_env_name homepage_url rewards_schedule banners_schedule]
    property :user do
      key :$ref, :EnvironmentUser
    end
    property :accounts_env_name do
      key :type, :string
      key :readOnly, true
    end
    property :homepage_url do
      key :type, :string
      key :readOnly, true
    end
    property :rewards_schedule do
      key :type, :array
      key :minLength, 1
      items do
        key :$ref, :RewardsScheduleSegment
      end
      key :description, 'The tags of the study object, used for grouping and filtering.'
    end
    property :banners_schedule do
      key :type, :array
      key :minLength, 1
      items do
        key :$ref, :BannerMessage
      end
      key :description, 'Banners that should be displayed to the user'
    end
  end

  swagger_path '/environment' do
    operation :get do
      key :summary, 'Get info about the deployment environment'
      key :description, <<~DESC
        Get info about the deployment environment
      DESC
      key :operationId, 'getEnvironment'
      key :produces, [
        'application/json'
      ]
      key :tags, [
        'Environment'
      ]
      response 200 do
        key :description, 'Success.'
        schema do
          key :$ref, :Environment
        end
      end
      extend Api::V1::SwaggerResponses::UnprocessableEntityError
      extend Api::V1::SwaggerResponses::ServerError
    end
  end

end
