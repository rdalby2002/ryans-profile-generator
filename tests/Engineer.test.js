const Engineer = require('../lib/Engineer');

describe('Initialization', () => {
  it('should return an object', () => {
    const engineer = new Engineer();

    expect(typeof (engineer)).toBe('object');
  })
});

describe('getGithub', () => {
  it(`should return engineer's Github as a string`, () => {
    const github = new Engineer('Brad', 45, 'brad.stokes@gmail.com', 'imstoked1995');

    expect(github.getGithub()).toEqual('imstoked1995');
  })
});

describe('getRole', () => {
  it(`should return employee's role as a string`, () => {
    const role = new Engineer('Brad', 45, 'brad.stokes@gmail.com', 'imstoked1995', 'Engineer');

    expect(role.getRole()).toEqual('Engineer');
  })
});