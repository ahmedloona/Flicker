# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User
User.destroy_all
ahmed = User.create!(username: "Ahmed", password: "123456", email: "ahmed@gmail.com")

mike = User.create!(username: "mike", password: "123456", email: "mike@yahoo.com")

# Photo
Photo.destroy_all
photo1 = Photo.create!(user_id: ahmed.id, caption: "foliage")
photo2 = Photo.create!(user_id: ahmed.id, caption: "card")
photo3 = Photo.create!(user_id: ahmed.id, caption: "rain")

photo4 = Photo.create!(user_id: mike.id, caption: "architecture")
photo5 = Photo.create!(user_id: mike.id, caption: "beach")
photo6 = Photo.create!(user_id: mike.id, caption: "boat")


#attach url
photo1.image.attach(io: File.open("./app/assets/images/seed/foliage.jpg"), filename: "foliage.jpg")
photo2.image.attach(io: File.open("./app/assets/images/seed/card.jpg"), filename: "card.jpg")
photo3.image.attach(io: File.open("./app/assets/images/seed/rain.jpg"), filename: "rain.jpg")

photo4.image.attach(io: File.open("./app/assets/images/seed/architecture.jpg"), filename: "architecture.jpg")
photo5.image.attach(io: File.open("./app/assets/images/seed/beach.jpg"), filename: "beach.jpg")
photo6.image.attach(io: File.open("./app/assets/images/seed/boat.jpg"), filename: "boat.jpg")
