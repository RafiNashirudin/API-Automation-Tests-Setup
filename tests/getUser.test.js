const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const axios = require('axios');

chai.use(chaiJsonSchema);
const expect = chai.expect;

const userSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        email: { type: 'string' },
        first_name: { type: 'string' },
        last_name: { type: 'string' }
      },
      required: ['id', 'email', 'first_name', 'last_name']
    }
  },
  required: ['data']
};

describe('GET User API Test', () => {
  it('should get a user and validate schema', async () => {
    const response = await axios.get('https://reqres.in/api/users/2');
    expect(response.status).to.equal(200);
    expect(response.data).to.be.jsonSchema(userSchema);
  });
});
