module Api
  class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: :create

    def create
      user_hash = User.authenticate(auth_params["name"], auth_params["password"])
      if user_hash
        created_jwt = Core::JsonWebToken.encode(user_hash)
        cookies.signed[:jwt] = {
          value: created_jwt,
          httponly: true,
          expires: 1.hour.from_now
        }
        render json: user_hash
      else
        render status: 404,
               json: {error: 'Username or password incorrect'}
      end
    end

    def show
      render json: {id: current_user.id}
    end

    def destroy
      cookies.delete(:jwt)
      render json: {success: true}
    end

    private

      def auth_params
        params.permit(:name, :password)
      end
  end
end
