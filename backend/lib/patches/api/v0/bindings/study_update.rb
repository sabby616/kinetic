# frozen_string_literal: true

Rails.application.config.to_prepare do

  Api::V1::Bindings::StudyUpdate.class_exec do
    def update_model!(model)
      model.update!(to_hash)
    end
  end

end
