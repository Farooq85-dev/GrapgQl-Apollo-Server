import { authors, games, reviews } from "./_db.js";

export const resolvers = {
  Query: {
    games: () => games,
    reviews: () => reviews,
    authors: () => authors,
    singleReview: (parent, { id }) =>
      reviews.find((review) => review.id === id),
    singleAuthor: (parent, { name }) =>
      authors.find((author) => author.name === name),
    singleGame: (parent, { title }) =>
      games.find((game) => game.title === title),
  },
};
