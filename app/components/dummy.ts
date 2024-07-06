type Image = {
  href: string;
  alt: string;
};

export type ImagePreview = {
  images: Image[];
  description: string;
  imageSource?: string;
};

export type ExternalSource = {
  title: string;
  source: string;
  image: {
    imageUrl: string;
    alt: string;
  };
};

export type Post = {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  content: string;
  category: {
    title: string;
    href: string;
  };
  image: {
    imageUrl: string;
    alt: string;
  };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
  externalSource?: ExternalSource;
  imagePreview?: ImagePreview;
};

export const post1: Post = {
  id: 1,
  title: "This is a title let's make it longer.",
  href: "#",
  description:
    "This is a description it might be bit lengtier than title. This is th second line lets see how it translates to design.",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  category: { title: "Marketing", href: "#" },
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
  image: {
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
    alt: "image",
  },
  author: {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    href: "#",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
  },
};
export const post2: Post = {
  id: 2,
  title: "This is a title let's make it longer. This is a second line.",
  href: "#",
  description: "This is a description it might be bit lengtier than title",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  category: { title: "Marketing", href: "#" },
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
  image: {
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
    alt: "image",
  },
  author: {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    href: "#",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
  },
};
export const post3: Post = {
  id: 3,
  title: "This is a title let's make it longer.",
  href: "#",
  description: "This is a description it might be bit lengtier than title",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  category: { title: "Marketing", href: "#" },
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
  image: {
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
    alt: "image",
  },
  author: {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    href: "#",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
  },
};
export const post4: Post = {
  id: 4,
  title:
    "This is a title let's make it longer. Alright, this might work afterall.",
  href: "#",
  description: "This is a description it might be bit lengtier than title",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  category: { title: "Marketing", href: "#" },
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
  image: {
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
    alt: "image",
  },
  author: {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    href: "#",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
  },
  externalSource: {
    title: "This is title of article from external source. | ExternalSource",
    source: "externalsource",
    image: {
      imageUrl:
        "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
      alt: "this is image.",
    },
  },
};
export const post5: Post = {
  id: 5,
  title:
    "This is a title let's make it longer. Adding one more line to finish design.",
  href: "#",
  description: "This is a description it might be bit lengtier than title",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  category: { title: "Marketing", href: "#" },
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
  image: {
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
    alt: "image",
  },
  author: {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    href: "#",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
  },
  imagePreview: {
    images: [
      {
        href: "#",
        alt: "this is image 1",
      },
      {
        href: "#",
        alt: "this is image 2",
      },
      {
        href: "#",
        alt: "this is image 3",
      },
    ],
    description: "Move through this gallery to see all available images",
    imageSource: "Internet",
  },
};

export const posts = [post1, post2, post3, post4, post5];
