const { faker } = require('@faker-js/faker');


function createCustomer() {
  return {
    contactname: faker.person.fullName(),
    password: faker.animal.petName(),
    contactnumber: faker.helpers.replaceSymbols('09########'),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    avatar: '/public/images/blank-profile-picture.png',
  };
}

/**
 * 
 * @param {import ("knex").knex} knex
 * @return {Promise<void>} 
 */

exports.seed = async function (knex) {
  await knex('customer').del();
  await knex('customer').insert(Array(100).fill().map(createCustomer));
};