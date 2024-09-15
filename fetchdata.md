In your frontend application, you can now make HTTP requests to the Rails API endpoints. Here's an example using JavaScript with the Fetch API:

Fetch Users
fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

Copy

Apply

Create User
fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'newuser',
    email: 'newuser@example.com',
    password: 'password'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

Copy

Apply

Fetch Photos
fetch('http://localhost:3000/photos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

Copy

Apply

Create Photo
fetch('http://localhost:3000/photos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user_id: 1,
    photo_url: 'http://example.com/photo.jpg',
    description: 'A new photo'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

Copy

Apply

Create Like
fetch('http://localhost:3000/likes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user_id: 1,
    photo_id: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));