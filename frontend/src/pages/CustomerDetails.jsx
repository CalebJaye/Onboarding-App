import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCustomerById, updateCustomerName, deleteCustomer } from '../adapters/customerAdapters';

const CustomerDetails = () => {
  const [customer, setCustomer] = useState({})
  const [newCustomerName, setNewCustomerName] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  // on load, get the fellow by id
  useEffect(() => {
    const doFetch = async () => {
      const [foundCustomer, error] = await getCustomerById(id);
      setCustomer(foundCustomer);
    };
    doFetch();
  }, [])

  // when the delete button is pressed, send a DELETE request
  const handleDeleteCustomer = async () => {
    await deleteCustomer(id);
    navigate('/');
  }

  // when the form is filled out, send a PATCH request
  const handleUpdateCustomer = async (e) => {
    e.preventDefault();

    const [updatedCustomer, error] = await updateCustomerName(id, newCustomerName);
    setFellow(updatedCustomer);

    setNewCustomerName('');
  }

  return (
    <>
      <Link to='/'>Go Home</Link>
      <h1>Fellow Details</h1>
      <p>Name: {fellow.name}</p>
      <p>Id: {fellow.id}</p>
      <form onSubmit={handleUpdateCustomer}>
        <label htmlFor="name">Update Customer Name</label>
        <input type="text" name="name" id="name" value={newCustomerName} onChange={(e) => setNewCustomerName(e.target.value)} placeholder='New Name' />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDeleteCustomer} className='danger'>Delete Customer</button>
    </>
  )
}

export default CustomerDetails;