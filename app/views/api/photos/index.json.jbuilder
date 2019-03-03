
@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :caption, :user_id
  end
end
