export type Review = {
  author: string;
  date: string;
  rating: number;
  text: string;
};

export const GOOGLE_REVIEWS = {
  rating: 4.7,
  count: 44,
  url: 'https://www.google.com/maps/search/Elemental+Floral+By+TKM+Designs+Houston+TX/reviews',
};

export const FEATURED_REVIEWS: Review[] = [
  {
    author: 'Jeanae Jackson Fluitt',
    date: 'Houston, TX',
    rating: 5,
    text: "Tawnya was excellent with bringing our boho vision florals to life for our wedding! She gave us recommendations on florals and decor and how to navigate planning our design elements for our ceremony and reception. She supported all the changes we wanted to make, and we always felt confident knowing she would deliver the best results for our special day.",
  },
  {
    author: 'Tricia Perrine',
    date: 'Houston, TX',
    rating: 5,
    text: "There are simply no words to express how fabulous our experience with Tawnya was! From our first conversation, I knew we were making the right decision in choosing her! She captured my daughter\'s vision perfectly and was an absolute dream to work with. I will use Elemental Floral Events for ALL of my future Houston floral needs.",
  },
  {
    author: 'Kimberly H.',
    date: 'Houston, TX',
    rating: 5,
    text: "I want to extend my heartfelt thanks and strong recommendation for Tawnya Morse at Elemental Floral Events for her exceptional work and attention to detail during my daughter\'s wedding. Tawnya guided us through the flower selection process with expertise and care, listening closely to my daughter\'s vision for her dream day.",
  },
  {
    author: 'Amanda Aird',
    date: 'Houston, TX',
    rating: 5,
    text: "We hired Elemental Floral Events for our wedding day and it was a fantastic decision. Even with the economic and shipping difficulties, the team worked with us to ensure that our florals had the colors we wanted. The bouquets for my bridesmaids and for me were everything I hoped for. Every single bloom and leaf was gorgeous.",
  },
  {
    author: 'Allison Liebster',
    date: 'Houston, TX',
    rating: 5,
    text: "Tawnya and her team were truly amazing! I had a very unique idea for a Halloween Gothic wedding and they really came through for me. Everyone was talking about how beautiful everything came out and they were super easy to work with. Would highly recommend!",
  },
  {
    author: 'Melissa F.',
    date: 'Houston, TX',
    rating: 5,
    text: "They created something that was beyond my wildest dreams… It was more gorgeous than I could have ever imagined!",
  },
];
