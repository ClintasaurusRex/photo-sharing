# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Create some users
users = User.create!([
                       { full_name: 'Ash Williams', email: 'ash@example.com', password: 'password',
                         receive_updates: true },
                       { full_name: 'Jon Snow', email: 'jon@example.com', password: 'password', receive_updates: false }
                     ])

# Create some posts
posts = Post.create!([
                       { created_at: Time.now, updated_at: Time.now },
                       { created_at: Time.now, updated_at: Time.now }
                     ])

# Create some photos
photos = Photo.create!([
                         { user: users.first, photo_url: 'http://example.com/photo1.jpg', description: 'A beautiful sunrise',
                           created_at: Time.now, updated_at: Time.now },
                         { user: users.last, photo_url: 'http://example.com/photo2.jpg', description: 'A snowy landscape', created_at: Time.now, updated_at: Time.now }
                       ])

# Create some likes
likes = Like.create!([
                       { user: users.first, photo: photos.first, created_at: Time.now, updated_at: Time.now },
                       { user: users.last, photo: photos.last, created_at: Time.now, updated_at: Time.now }
                     ])
