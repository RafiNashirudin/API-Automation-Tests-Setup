const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const axios = require('axios');

chai.use(chaiJsonSchema);
const expect = chai.expect;

const createUserSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    job: { type: 'string' },
    id: { type: 'string' },
    createdAt: { type: 'string' }
  },
  required: ['name', 'job', 'id', 'createdAt']
};

describe('POST User API Test', () => {
  it('should create a new user and validate schema', async () => {
    const response = await axios.post('https://reqres.in/api/users', {
      name: 'John Doe',
      job: 'Software Engineer'
    });
    expect(response.status).to.equal(201);
    expect(response.data).to.be.jsonSchema(createUserSchema);
  });
});
