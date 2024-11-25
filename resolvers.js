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

  Mutation: {
    deleteGame: (parent, { id }) => {
      const reaminingGames = games.filter((game) => game.id !== id);

      return {
        msg: `Game with this id ${id} deleted Successfully!`,
        reaminingGames,
      };
    },
    deleteAuthor: (parent, { name }) => {
      const remainingAuthors = authors.filter((author) => author.name !== name);
      return {
        msg: `Author with the name "${name}" deleted successfully!`,
        remainingAuthors: remainingAuthors,
      };
    },

    addGame: (parent, { game }) => {
      let newGame = { ...game, id: Math.floor(Math.random() * 1000) };
      games.push(game);
      return newGame;
    },

    editGame: (parent, { edit, id }) => {
      let updatedGame = games.map((game) => {
        if (game.id === id) {
          return { ...game, ...edit };
        }
        return game;
      });
      return updatedGame.find((game) => game.id === id);
    },
  },
};
