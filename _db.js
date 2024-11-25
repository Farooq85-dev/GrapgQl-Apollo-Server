let games = [
  { id: "1", title: "Zelda: Tears of the Kingdom", platforms: ["Switch"] },
  { id: "2", title: "Final Fantasy 7 Remake", platforms: ["PS5", "Xbox"] },
  { id: "3", title: "Elden Ring", platforms: ["PS5", "Xbox", "PC"] },
  { id: "4", title: "Mario Kart", platforms: ["Switch"] },
  { id: "5", title: "Pokemon Scarlet", platforms: ["Switch"] },
];

const authors = [
  { id: "1", name: "Mario", verified: true },
  { id: "2", name: "Yoshi", verified: false },
  { id: "3", name: "Peach", verified: true },
];

const reviews = [
  {
    id: "1",
    rating: 9,
    content: "An epic experience!",
    authorId: "1",
    gameId: "2",
  },
  {
    id: "2",
    rating: 10,
    content: "A masterpiece of storytelling.",
    authorId: "2",
    gameId: "1",
  },
  {
    id: "3",
    rating: 7,
    content: "Challenging but rewarding gameplay.",
    authorId: "3",
    gameId: "3",
  },
  {
    id: "4",
    rating: 5,
    content: "Fun, but lacks depth.",
    authorId: "2",
    gameId: "4",
  },
  {
    id: "5",
    rating: 8,
    content: "A nostalgic journey for fans.",
    authorId: "2",
    gameId: "5",
  },
  {
    id: "6",
    rating: 7,
    content: "Good but could be better.",
    authorId: "1",
    gameId: "2",
  },
  {
    id: "7",
    rating: 10,
    content: "Absolutely phenomenal!",
    authorId: "3",
    gameId: "1",
  },
];

export { games, authors, reviews };
