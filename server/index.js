const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

const {
    serveCustomers,
    serveCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
  } = require('./controllers/CustomerControllers');

  app.get('/', (req, res) => {
    res.send('woah');
  });

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);

const pathToFrontendDist = path.join(__dirname, '../Onboarding/dist');

const logRoutes = (req, res, next) => {
    const time = (new Date()).toLocaleString();
    req.time = time;
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next();
};

const serveStatic = express.static(pathToFrontendDist);


const parseJSON = express.json();
  
app.use(logRoutes);   
app.use(serveStatic);
app.use(parseJSON);   

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get('/api/customers', serveCustomers);
app.get('/api/customers/:id', serveCustomer);
app.post('/api/customers', createCustomer);
app.patch('/api/customers/:id', updateCustomer);
app.delete('/api/customers/:id', deleteCustomer);

