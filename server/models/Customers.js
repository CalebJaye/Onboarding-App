const getId = require('../utils/getId');

const Customers = [
    { name: 'John', id: getId() },
    { name: 'Jimmy', id: getId() },
    { name: 'Bob', id: getId() },
  ];

class Customer {
  static create(name) {
    const newCustomer = {
      name,
      id: getId()
    }
    Customers.push(newCustomer);
    return newCustomer;
  }

  static list() {
    return [...Customers];
  }

  static find(id) {
    return Customers.find((customer) => customer.id === id);
  }

  static editName(id, newName) {
    const customer = Customer.find(id);
    if (!customer) return null;
    customer.name = newName;
    return customer;
  }

  static delete(id) {
    const customerIndex = Customers.findIndex((customer) => customer.id === id);
    if (customerIndex < 0) return false;

    Customers.splice(customerIndex, 1);
    return true;
  }
}

module.exports = Customer;
  
