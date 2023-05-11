import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import LoginPg from './pages/LoginPg';
import SignupPg from './pages/SignupPg';
import PackageDetail from './pages/PackageDetail'
import Packages from './pages/Packages';
import Home from './pages/Home'
import Footer from './components/Footer';



//start GrapgQl
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

//introduce new client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<Home />} 
          />
          <Route 
            path='/login' 
            element={<LoginPg />} 
          />
           <Route
                path="/products"
                element={<Packages/>}
              />
           <Route
                path="/products/:id"
                element={<PackageDetail />}
              />
          <Route 
            path='/signup' 
            element={<SignupPg />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Oops! Wrong way</h1>}
          />
        </Routes>
        <Footer />
    </Router>
    </ApolloProvider>
  );
}

export default App;
