const db = require('./db');

module.exports = {
  Query: {
    test: () => 'Test Success, GraphQL server is up & running!!',
    sayHello: (root, args, context, info) => `Hey ${args.name}!!`,
    greeting: () => 'Hello Jessie!!',
    students: () => db.students.list(),
    studentById: (root, args, context, info) => {
      // args will contain parameter passed in query
      return db.students.get(args.id);
    },
  },
  Mutation: {
    createStudent: (root, args, context, info) => {
      return db.students.create({
        collegeId: args.collegeId,
        firstName: args.firstName,
        lastName: args.lastName
      });
    },
    addStudent_returns_object:(root,args,context,info) => {
      const id = db.students.create({
        collegeId: args.collegeId,
        firstName: args.firstName,
        lastName: args.lastName
      });

      return db.students.get(id);
    },
  },
  Student: {
    fullName: (root, args, context, info) => {
      return root.lastName + "," + root.firstName;
    },
    college: (root) => {
      return db.colleges.get(root.collegeId);
    },
  },
};
