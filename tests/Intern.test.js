const Intern = require('../lib/Intern');

describe('Initialization', () => {
  it('should return an object', () => {
    const intern = new Intern();

    expect(typeof (intern)).toBe('object');
  })
});

describe('getSchool', () => {
  it(`should return intern's school name as a string`, () => {
    const school = new Intern('Brad', 45, 'brad.stokes@gmail.com', 'UTSA');

    expect(school.getSchool()).toEqual('UTSA');
  })
});

describe('getRole', () => {
  it(`should return intern's role as a string`, () => {
    const role = new Intern('Brad', 45, 'brad.stokes@gmail.com', 'UTSA', 'Intern');
    
    expect(role.getRole()).toEqual('Intern');
  })
});