'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('authors', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        image: 'http://example.com/image.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        image: 'http://example.com/image2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('authors', null, {});
  }
};
