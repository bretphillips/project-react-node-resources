import Customer from '../../src/models/customer'


test('customer instantiation without parameters results in null/default value class member assignment', () => {
    const customer = new Customer();

    expect(customer.name).toBe(null);
    expect(customer.emailAddress).toBe(null);
    expect(customer.dateOfBirth).toBe(null);
});


test('customer instantiation with parameters results in expected value class member assignment', () => {
    const mock = {
        name: 'John Smith',
        emailAddress: 'john.smith@gmail.com',
        dateOfBirth: '01/01/1999'
    };
    const customer = new Customer(mock.name, mock.emailAddress, mock.dateOfBirth);

    expect(customer.name).toBe(mock.name);
    expect(customer.emailAddress).toBe(mock.emailAddress);
    expect(customer.dateOfBirth).toBe(mock.dateOfBirth);
});