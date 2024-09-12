const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";

const photo1 = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: `${publicUrl}/image-1.png`,
    // regular: `${publicUrl}/Image-1-Regular.jpeg`,
  },
  user: {
    id: "1",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${publicUrl}/profile-1.jpg`,
  },
};

const photo2 = {
  id: "2",
  location: {
    city: "Toronto",
    country: "Canada",
  },
  urls: {
    full: `${publicUrl}/image-2.png`,
    // regular: `${publicUrl}/Image-2-Regular.jpeg`,
  },
  user: {
    id: "2",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${publicUrl}/profile-1.jpg`,
  },
};

const photo3 = {
  id: "3",
  location: {
    city: "Ottawa",
    country: "Canada",
  },
  urls: {
    full: `${publicUrl}/image-3.png`,
    regular: `${publicUrl}/Image-3-Regular.jpeg`,
  },
  user: {
    id: "3",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${publicUrl}/profile-1.jpg`,
  },
};

const photos = [
  {
    ...photo1,
    similar_photos: {
      photo2,
      photo3,
    },
  },
  {
    ...photo2,
    similar_photos: {
      photo2,
      photo3,
    },
  },
  {
    ...photo3,
    similar_photos: {
      photo2,
      photo3,
    },
  },
];

export default photos;
