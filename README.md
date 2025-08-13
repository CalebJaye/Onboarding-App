# Onboarding App

A full-stack web application for managing customer onboarding with a modern React frontend and Express.js backend.

## 🏗️ Project Structure

```
Onboarding-App/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── pages/           # React components for different views
│   │   │   ├── Home.jsx     # Main dashboard with customer list
│   │   │   └── CustomerDetails.jsx # Individual customer view
│   │   ├── adapters/        # API communication layer
│   │   │   ├── customerAdapters.js # Customer CRUD operations
│   │   │   └── handleFetch.js     # HTTP request handler
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # Application entry point
│   │   └── index.css        # Global styles with Tailwind CSS
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite build configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── postcss.config.js    # PostCSS configuration
├── server/                   # Express.js backend server
│   ├── controllers/         # Request handlers
│   │   └── CustomerControllers.js # Customer CRUD operations
│   ├── models/              # Data models
│   │   └── Customers.js     # Customer data structure
│   ├── utils/               # Utility functions
│   ├── index.js             # Server entry point
│   └── package.json         # Backend dependencies
└── README.md                # This file
```

## 🚀 Technologies Used

### Frontend
- **React 18.3.1** - Modern React with hooks
- **React Router DOM 7.8.0** - Client-side routing
- **Vite 5.4.10** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **ESLint** - Code linting and formatting

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web application framework
- **Nodemon 3.1.10** - Development server with auto-reload

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Onboarding-App
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Start the Backend Server
```bash
cd ../server
npm run dev
```
The server will start on `http://localhost:8080`

### 5. Start the Frontend Development Server
```bash
cd ../frontend
npm run dev
```
The frontend will start on `http://localhost:5173`

## 🔌 API Endpoints

The backend provides the following RESTful API endpoints:

### Customer Management
- **GET** `/api/customers` - Retrieve all customers
- **GET** `/api/customers/:id` - Retrieve a specific customer by ID
- **POST** `/api/customers` - Create a new customer
- **PATCH** `/api/customers/:id` - Update a customer's name
- **DELETE** `/api/customers/:id` - Delete a customer

### Request/Response Format
- **Create Customer**: `POST /api/customers`
  ```json
  {
    "customerName": "John Doe"
  }
  ```

- **Update Customer**: `PATCH /api/customers/:id`
  ```json
  {
    "customerName": "Jane Doe"
  }
  ```

## 🎨 Frontend Features

### Home Page (`/`)
- **Customer List**: Display all customers with navigation links
- **Add Customer Form**: Create new customers with real-time updates
- **Responsive Design**: Modern UI with Tailwind CSS styling
- **Navigation**: Links to individual customer details

### Customer Details Page (`/customers/:id`)
- **Individual Customer View**: Display specific customer information
- **Navigation**: Back to home page
- **Responsive Layout**: Mobile-friendly design

### UI Components
- **Modern Design**: Clean, professional interface using blue and black color scheme
- **Interactive Elements**: Hover effects, focus states, and smooth transitions
- **Form Validation**: Input validation and error handling
- **Responsive Grid**: Adapts to different screen sizes

## 🚀 Development Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm run dev      # Start development server with nodemon
```

## 🔧 Configuration

### Vite Configuration
- **Proxy Setup**: API requests are proxied to the backend server
- **React Plugin**: Fast refresh and hot module replacement
- **Build Optimization**: Optimized for production

### Tailwind CSS
- **Custom Colors**: Blue and black color scheme
- **Responsive Utilities**: Mobile-first responsive design
- **Component Classes**: Pre-built component styles

## 🌐 Environment Setup

The application uses a proxy configuration to handle frontend-backend communication during development:

- **Frontend**: Runs on port 5173 (Vite default)
- **Backend**: Runs on port 8080
- **API Proxy**: All `/api/*` requests are forwarded to the backend

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Troubleshooting

### Common Issues

1. **Port Already in Use**: Ensure ports 8080 and 5173 are available
2. **CORS Errors**: The backend includes CORS middleware for development
3. **Build Errors**: Clear `node_modules` and reinstall dependencies
4. **Proxy Issues**: Restart both frontend and backend servers after configuration changes

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify both servers are running
4. Check the network tab for failed API requests
