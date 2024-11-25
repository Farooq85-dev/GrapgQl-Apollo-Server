import { authors, games, reviews } from "./_db.js";

export const resolvers = {
  Query: {
    games: () => games,
    reviews: () => reviews,
    authors: () => authors,
    singleReview: (parent, { id }) =>
      reviews.find((review) => review.id === id),
    singleAuthor: (parent, { id }) =>
      authors.find((author) => author.id === id),
    singleGame: (parent, { id }) => games.find((game) => game.id === id),
  },
  Game: {
    reviews(parent) {
      return reviews.filter((review) => review.gameId === parent.id);
    },
  },
  Review: {
    author(parent) {
      return authors.find((authors) => authors.id === parent.author_id);
    },
    game(parent) {
      return games.find((game) => game.id === parent.game_id);
    },
  },
  Author: {
    reviews(parent) {
      return reviews.filter((review) => review.authorId === parent.id);
    },
  },
};
