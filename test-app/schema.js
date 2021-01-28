const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    test: String
    sayHello(name: String!): String
    greeting: String
    students: [Student]
    studentById(id: ID!): Student
  }

  type Mutation {
    addStudent_returns_object(collegeId: ID, firstName: String, lastName: String): Student
    createStudent(collegeId: ID, firstName: String, lastName: String): String
  }

  type Student {
    id: ID!
    firstName: String
    lastName: String
    fullName: String
    password: String
    collegeId: String
    college: College
  }

  type College {
    id: ID!
    name: String
    location: String
    rating: Float
 }
`;

module.exports = typeDefs;