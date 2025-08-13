import handleFetch from "./handleFetch"

export const getAllCustomers = async () => {
  const [allCustomers, error] = await handleFetch('/api/customers')
  return [allCustomers, error];
}

export const getCustomerById = async (id) => {
  const [customer, error] = await handleFetch(`/api/customers/${id}`);
  return [customer, error];
}

export const createCustomer = async (customerName) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ customerName })
  }

  const [customerFellow, error] = await handleFetch('/api/customers', options);
  return [customerFellow, error];
}

export const deleteCustomer = async (id) => {
  const options = {
    method: "DELETE",
  };
  const [success, error] = await handleFetch(`/api/customers/${id}`, options);
  return [success, error];
}

export const updateCustomerName = async (id, customerName) => {
  const options = {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ customerName })
  };

  const [updatedCustomer, error] = await handleFetch(`/api/customers/${id}`, options);
  return [updatedCustomer, error];
}