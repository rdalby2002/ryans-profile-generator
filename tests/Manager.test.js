const Manager = require('../lib/Manager');

describe('Initialization', () => {
  it(`should return an object`, () => {
    const manager = new Manager();

    expect(typeof (manager)).toBe('object');
  })
});

describe('getOfficeNo', () => {
  it(`should return manager's office number`, () => {
    const officeNo = new Manager('Brad', 45, 'brad.stokes@gmail.com', 14);

    expect(officeNo.getOfficeNo()).toEqual(14);
  })
});

describe('getRole', () => {
  it(`should return employee's role as a string`, () => {
    const manager = new Manager('Brad', 45, 'brad.stokes@gmail.com', 14, 'Manager');

    expect(role.getRole()).toEqual('Manager');
  })
});