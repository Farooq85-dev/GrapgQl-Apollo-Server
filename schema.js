export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platforms: [String!]!
        reviews: [Review!] # A game can have multiple reviews
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        author: Author!  # One review belongs to one author
        game: Game!      # One review corresponds to one game
    }

    type Author {
        id: ID!
        username: String!
        name: String!
        verified: Boolean!
        reviews: [Review!] # An author can write multiple reviews
    }

    # Entry Point for Querying Reviews, Games, and Authors
    type Query {
        reviews: [Review]
        games: [Game]
        authors: [Author]
        singleReview(id: ID!): Review
        singleAuthor(id: ID!): Author
        singleGame(id: ID!): Game
    }

    type DeleteAuthorResponse {
        msg: String!
        remainingAuthors: [Author!]!
    }
    
    input addGameInput {
        title: String!
        platforms: [String!]!
    }

    input editGameInput {
        title: String
        platforms: [String!]
    }

    type Mutation {
        deleteGame(id:ID!): [Game]
        addGame(game:addGameInput!): Game
        editGame(edit:editGameInput!, id:ID!): Game
        deleteAuthor(name: String!): DeleteAuthorResponse!
    }
`;
