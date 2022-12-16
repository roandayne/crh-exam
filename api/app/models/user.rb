class User < ApplicationRecord
  has_secure_password
  validates :name, presence: true, length: { maximum: 50 }, uniqueness: true

  def self.authenticate(name, password)
    user = User.find_by(name: name)
    if user && user.authenticate(password)
      user_info = {
        user_id: user.id,
        name: user.name
      }
      return user_info
    end

    return false
  end
end
