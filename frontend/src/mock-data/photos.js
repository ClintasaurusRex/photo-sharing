const photo1 = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: `${process.env.PUBLIC_URL}/image-1-Full.png`,
    // regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  },
  user: {
    id: "1",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
};

const photo2 = {
  id: "2",
  location: {
    city: "Toronto",
    country: "Canada",
  },
  urls: {
    full: `${process.env.PUBLIC_URL}/image-2.png`,
    // regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
  },
  user: {
    id: "2",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
};

const photo3 = {
  id: "3",
  location: {
    city: "Ottawa",
    country: "Canada",
  },
  urls: {
    full: `${process.env.PUBLIC_URL}/image-3.png`,
    regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
  },
  user: {
    id: "3",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
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
