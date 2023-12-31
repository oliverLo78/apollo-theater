const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
    # Add a field that will return an array of Class instances
    classes: [Class]
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
    # Define a query with an ID parameter to return a single Class object
    class(id: ID!): Class
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new schools
    addSchool(name: String!, location: String!, studentCount: Int!): School
    updateClass(id: ID!, building: String!): Class
  }

`;

module.exports = typeDefs;
