const { gql } = require("apollo-server");

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int,
    videoUrl: String,
    content: String
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
    "Get module, provided by a module's ID"
    module(id: ID!): Module
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  type Mutation{
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }
`;
module.exports = typeDefs;
