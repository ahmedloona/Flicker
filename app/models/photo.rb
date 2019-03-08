class Photo < ApplicationRecord
  validates :user_id, presence: true

  validate :ensure_photo

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_one_attached :image

  def ensure_photo
    unless self.image.attached?
      errors[:image] << "Please attach an image"
    end
  end

end
