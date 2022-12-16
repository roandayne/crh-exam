class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authenticate_user

  def authenticate_user
      return true if current_user
      render status: 401, json: {error: 'unauthorized'}
  end

  def current_user
      auth_token = cookies.signed[:jwt]
      decoded_token = Core::JsonWebToken.decode(auth_token)
      @current_user ||= User.find_by(id: decoded_token["user_id"]) if decoded_token
  end
end