module Core
  class JsonWebToken
    require 'jwt'

    JWT_SECRET = Rails.application.secrets.secret_key_base

    def self.encode(payload, exp = 1.hour.from_now)
      payload[:exp] = exp.to_i
      JWT.encode(payload, JWT_SECRET)
    end

    def self.decode(token)
      begin
        body = JWT.decode(token, JWT_SECRET)
        return HashWithIndifferentAccess.new body[0] if body
        return false
      rescue JWT::ExpiredSignature, JWT::VerificationError => e
        return false
      rescue JWT::DecodeError, JWT::VerificationError => e
        return false
      end
    end
  end
end
