const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const axios = require('axios');

chai.use(chaiJsonSchema);
const expect = chai.expect;

const updateUserSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    job: { type: 'string' },
    updatedAt: { type: 'string' }
  },
  required: ['name', 'job', 'updatedAt']
};

describe('PUT User API Test', () => {
  it('should update a user and validate schema', async () => {
    const response = await axios.put('https://reqres.in/api/users/2', {
      name: 'John Doe',
      job: 'Software Engineer'
    });
    expect(response.status).to.equal(200);
    expect(response.data).to.be.jsonSchema(updateUserSchema);
  });
});
