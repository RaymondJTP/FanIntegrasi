'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        nama : 'Ananda bayu',
        email : 'bayu@email.com',
        npp : 12345,
        npp_supervisor : 11111,
        password : 'passwordbayu',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : 'Supervisor',
        email : 'supervisor@email.com',
        npp : 11111,
        npp_supervisor : null,
        password : 'passwordsupervisor',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
