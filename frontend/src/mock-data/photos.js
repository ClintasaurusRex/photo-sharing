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

const photo4 = {
  id: "4",
  location: {
    city: "Victoria",
    country: "Canada",
  },
  urls: {
    full: `${publicUrl}/image-4.png`,
    // regular: `${publicUrl}/Image-3-Regular.jpeg`,
  },
  user: {
    id: "4",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${publicUrl}/profile-1.jpg`,
  },
};

const photo5 = {
  id: "5",
  location: {
    city: "Ottawa",
    country: "Canada",
  },
  urls: {
    full: `${publicUrl}/image-5.png`,
    // regular: `${publicUrl}/Image-3-Regular.jpeg`,
  },
  user: {
    id: "5",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${publicUrl}/profile-1.jpg`,
  },
};

const photo6 = {
  id: "6",
  location: {
    city: "Ottawa",
    country: "Canada",
  },
  urls: {
    full: `${publicUrl}/image-6.png`,
    // regular: `${publicUrl}/Image-3-Regular.jpeg`,
  },
  user: {
    id: "6",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${publicUrl}/profile-1.jpg`,
  },
};

const photo7 = {
  id: "7",
  location: {
    city: "Ottawa",
    country: "Canada",
  },
  urls: {
    full: `${publicUrl}/image-7.png`,
    // regular: `${publicUrl}/Image-3-Regular.jpeg`,
  },
  user: {
    id: "7",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${publicUrl}/profile-1.jpg`,
  },
};

const photo8 = {
  id: "8",
  location: {
    city: "Ottawa",
    country: "Canada",
  },
  urls: {
    full: `${publicUrl}/image-8.png`,
    // regular: `${publicUrl}/Image-3-Regular.jpeg`,
  },
  user: {
    id: "8",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${publicUrl}/profile-8.jpg`,
  },
};

const photo9 = {
  id: "9",
  location: {
    city: "Ottawa",
    country: "Canada",
  },
  urls: {
    full: `${publicUrl}/image-9.png`,
    // regular: `${publicUrl}/Image-3-Regular.jpeg`,
  },
  user: {
    id: "9",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${publicUrl}/profile-1.jpg`,
  },
};

const photo10 = {
  id: "10",
  location: {
    city: "Ottawa",
    country: "Canada",
  },
  urls: {
    full: `${publicUrl}/image-10.png`,
    // regular: `${publicUrl}/Image-3-Regular.jpeg`,
  },
  user: {
    id: "10",
    username: "exampleuser",
    name: "Joe Example",
    profile: `${publicUrl}/profile-1.jpg`,
  },
};

const photos = [
  {
    ...photo1,
    similar_photos: [
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ],
  },
  {
    ...photo2,
    similar_photos: [
      photo1,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ],
  },
  {
    ...photo3,
    similar_photos: [
      photo1,
      photo2,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ],
  },
  {
    ...photo4,
    similar_photos: [
      photo1,
      photo2,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ],
  },
  {
    ...photo5,
    similar_photos: [
      photo1,
      photo2,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ],
  },
  {
    ...photo6,
    similar_photos: [
      photo1,
      photo2,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ],
  },
  {
    ...photo7,
    similar_photos: [
      photo1,
      photo2,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ],
  },
  {
    ...photo8,
    similar_photos: [
      photo1,
      photo2,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ],
  },
  {
    ...photo9,
    similar_photos: [
      photo1,
      photo2,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ],
  },
  {
    ...photo10,
    similar_photos: [
      photo1,
      photo2,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
    ],
  },
];

export default photos;
