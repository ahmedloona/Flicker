
@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :caption, :user_id
    json.imageUrl url_for(photo.image)
    json.username photo.user.username
  end
end
