const chai = require('chai');
const axios = require('axios');

const expect = chai.expect;

describe('DELETE User API Test', () => {
  it('should delete a user and return 204 status', async () => {
    const response = await axios.delete('https://reqres.in/api/users/2');
    expect(response.status).to.equal(204);
  });
});
