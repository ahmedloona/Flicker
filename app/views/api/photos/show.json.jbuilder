json.extract! @photo, :id, :caption, :user_id
json.imageUrl url_for(@photo.image)
