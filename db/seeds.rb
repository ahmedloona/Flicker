# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User
User.destroy_all

ahmed = User.create!(username: "ahmed", password: "123456", email: "ahmed@gmail.com")

mike = User.create!(username: "mike", password: "123456", email: "mike@yahoo.com")

sohail = User.create!(username: "sohail", password: "123456", email: "sohail@yahoo.com")

tina = User.create!(username: "tina", password: "123456", email: "tina@yahoo.com")


# Photo
Photo.destroy_all

photo1 = Photo.new(user_id: ahmed.id, caption: "foliage")
photo2 = Photo.new(user_id: ahmed.id, caption: "card")
photo3 = Photo.new(user_id: ahmed.id, caption: "rain")

photo4 = Photo.new(user_id: mike.id, caption: "architecture")
photo5 = Photo.new(user_id: mike.id, caption: "beach")
photo6 = Photo.new(user_id: mike.id, caption: "boat")

photo7 = Photo.new(user_id: sohail.id, caption: "from up above")
photo8 = Photo.new(user_id: sohail.id, caption: "eagle eye")
photo9 = Photo.new(user_id: sohail.id, caption: "read on")

photo10 = Photo.new(user_id: tina.id, caption: "click click")
photo11 = Photo.new(user_id: tina.id, caption: "bright soft")
photo12 = Photo.new(user_id: tina.id, caption: "borders?")

#attach url
photo1.image.attach(io: File.open("./app/assets/images/seed/foliage.jpg"), filename: "foliage.jpg")
photo2.image.attach(io: File.open("./app/assets/images/seed/card.jpg"), filename: "card.jpg")
photo3.image.attach(io: File.open("./app/assets/images/seed/rain.jpg"), filename: "rain.jpg")

photo4.image.attach(io: File.open("./app/assets/images/seed/architecture.jpg"), filename: "architecture.jpg")
photo5.image.attach(io: File.open("./app/assets/images/seed/beach.jpg"), filename: "beach.jpg")
photo6.image.attach(io: File.open("./app/assets/images/seed/boat.jpg"), filename: "boat.jpg")

photo7.image.attach(io: File.open("./app/assets/images/seed/aerial_1.jpg"), filename: "aerial_1.jpg")
photo8.image.attach(io: File.open("./app/assets/images/seed/aerial.jpg"), filename: "aerial.jpg")
photo9.image.attach(io: File.open("./app/assets/images/seed/books.jpg"), filename: "books.jpg")

photo10.image.attach(io: File.open("./app/assets/images/seed/camera.jpg"), filename: "camera.jpg")
photo11.image.attach(io: File.open("./app/assets/images/seed/cushions.jpg"), filename: "cushions.jpg")
photo12.image.attach(io: File.open("./app/assets/images/seed/door-border.jpg"), filename: "door-border.jpg")

photo1.save
photo2.save
photo3.save

photo4.save
photo5.save
photo6.save

photo7.save
photo8.save
photo9.save

photo10.save
photo11.save
photo12.save
