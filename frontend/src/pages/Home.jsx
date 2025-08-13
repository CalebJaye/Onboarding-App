import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getAllCustomers, createCustomer } from '../adapters/customerAdapters';

const Home = () => {
  // Get all fellows from the serverstate
  const [customers, setCustomers] = useState([]);
  // form input state
  const [newCustomerName, setNewCustomerName] = useState('');
  // form submission response state
  const [newlyAddedCustomer, setNewlyAddedCustomer] = useState({})

  // Get me the most up to date full list of fellows
  useEffect(() => {
    const doFetch = async () => {
      const [allCustomers, error] = await getAllCustomers()
      setCustomers(allCustomers);
    }
    doFetch();
  }, [newlyAddedCustomer])

  // Use the form data to create a POST request to create a new fellow
  const handleCreateCustomer = async (e) => {
    e.preventDefault();
    const [newCustomer, error] = await createCustomer(newCustomerName)
    setNewlyAddedCustomer(newCustomer);
    setNewCustomerName('');
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">Home</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleCreateCustomer} className="space-y-4">
            <label htmlFor="name" className="block text-lg font-semibold text-black">
              Add A New Customer
            </label>
            <div className="flex gap-3">
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={newCustomerName} 
                onChange={(e) => setNewCustomerName(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter customer name"
              />
              <button 
                type="submit" 
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-black mb-4">Customer List</h2>
          <ul className="space-y-2">
            {customers && Array.isArray(customers) &&
              customers.map((customer) => {
                return (
                  <li key={customer.id} className="border-b border-gray-200 last:border-b-0">
                    <Link 
                      to={`/customers/${customer.id}`}
                      className="block py-3 px-4 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      {customer.name} (User {customer.id})
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home;