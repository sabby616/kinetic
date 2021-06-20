# frozen_string_literal: true

# Load the Rails application.
require_relative 'application'

require 'errors'
require 'rescue_from_unless_local'
Dir[Rails.root.join('lib', 'patches', '**', '*.rb')].sort.each { |f| require f }

# Initialize the Rails application.
Rails.application.initialize!
