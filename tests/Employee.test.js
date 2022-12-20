const Employee = require('../lib/Employee');

describe('Initialization', () => {
  it('Creates a new employee object', () => {
    const employee = new Employee();

    expect(typeof (employee)).toBe('object');
  })
});

describe('getName', () => {
  it('should return employee name as a string', () => {
    const name = new Employee('Brad');

    expect(name.getName()).toEqual('Brad');
  })
});

describe('getID', () => {
  it('should return the employee ID number', () => {
    const id = new Employee('Brad', 45);

    expect(id.getID()).toEqual(45);
  })
});

describe('getEmail', () => {
  it('should return employee email as a string', () => {
    const email = new Employee('Brad', 45, 'brad.stokes@gmail.com');

    expect(email.getEmail()).toEqual('brad.stokes@gmail.com');
  })
});

describe('getRole', () => {
  it(`should return the employee's role as a string`, () => {
    const role = new Employee('Brad', 45, 'brad.stokes@gmail.com', 'Employee');

    expect(role.getRole()).toEqual('Employee');
  })
});