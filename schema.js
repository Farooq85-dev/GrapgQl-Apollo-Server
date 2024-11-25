export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platforms: [String!]!   
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!    
    }

    type Author {
        id: ID!
        username: String!
        name: String!
        verified: Boolean!
    }
    # Entry Point For Querying Reviews, Games and Authors  
    type Query {
        reviews: [Review]
        games: [Game]
        authors: [Author]
        singleReview(id:ID!):Review
        singleAuthor(name:String!):Author
        singleGame(title:String!):Game
    }
`;
