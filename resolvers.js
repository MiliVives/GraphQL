// resolvers.js
const db = require('./db');

const resolvers = {
  Query: {
    characters: () => {
      return new Promise((resolve, reject) => {
        db.all("SELECT * FROM characters", (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        });
      });
    },
    character: (_, { name }) => {
      return new Promise((resolve, reject) => {
        db.get("SELECT * FROM characters WHERE name = ?", [name], (err, row) => {
          if (err) reject(err);
          resolve(row);
        });
      });
    },
  },
  Mutation: {
    addCharacter: (_, { name, movie }) => {
      return new Promise((resolve, reject) => {
        db.run("INSERT INTO characters (name, movie) VALUES (?, ?)", [name, movie], function (err) {
          if (err) reject(err);
          resolve({ name, movie });
        });
      });
    },
    updateCharacter: (_, { name, movie }) => {
      return new Promise((resolve, reject) => {
        db.run("UPDATE characters SET movie = ? WHERE name = ?", [movie, name], function (err) {
          if (err) reject(err);
          resolve({ name, movie });
        });
      });
    },
    deleteCharacter: (_, { name }) => {
      return new Promise((resolve, reject) => {
        db.run("DELETE FROM characters WHERE name = ?", [name], function (err) {
          if (err) reject(err);
          resolve(true);
        });
      });
    },
  },
};

module.exports = resolvers;
