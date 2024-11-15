'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        title: 'My First Post',
        description: 'This is the description of my first post.',
        created_at: new Date(),
        category: 'General',
        author_id: 1, // Asegúrate de que este ID coincida con un autor existente
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Another Post',
        description: 'This is the description of another post.',
        created_at: new Date(),
        category: 'Technology',
        author_id: 2, // Asegúrate de que este ID coincida con un autor existente
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};