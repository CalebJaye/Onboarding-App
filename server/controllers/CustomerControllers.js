const Customer = require('../models/Customers');

// Get All (Read)
const serveCustomers = (req, res) => {
  try {
    const customersList = Customer.list();
    res.json(customersList);
  } catch (error) {
    console.error('Error serving customers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Get One (Read)
const serveCustomer = (req, res) => {
  try {
    const { id } = req.params;
    const customer = Customer.find(Number(id));

    if (!customer) {
      return res.status(404).json({
        message: `No customer with the id ${id}`
      });
    }
    res.json(customer);
  } catch (error) {
    console.error('Error serving customer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create
const createCustomer = (req, res) => {
  try {
    const { customerName } = req.body;
    if (!customerName) {
      return res.status(400).json({ message: "Invalid Name" });
    }

    const newCustomer = Customer.create(customerName);
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update
const updateCustomer = (req, res) => {
  try {
    const { customerName } = req.body;

    if (!customerName) {
      return res.status(400).json({ message: "Invalid Name" });
    }

    const { id } = req.params;
    const updatedCustomer = Customer.editName(Number(id), customerName);

    if (!updatedCustomer) {
      return res.status(404).json({
        message: `No customer with the id ${id}`
      });
    }

    res.json(updatedCustomer);
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Delete
const deleteCustomer = (req, res) => {
  try {
    const { id } = req.params;
    const didDelete = Customer.delete(Number(id));

    if (!didDelete) {
      return res.status(404).json({
        message: `No customer with the id ${id}`
      });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  serveCustomers,
  serveCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
};