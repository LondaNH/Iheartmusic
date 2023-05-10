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
import Header from './components/Header'
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
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
      <>
      <Header />
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<Home />} 
          />
          <Route 
            path='/login' 
            element={<LoginForm />} 
          />
           <Route
                path="/products/:id"
                element={<Packages />}
              />
          <Route 
            path='/signup' 
            element={<SignupForm />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Oops! Wrong way</h1>}
          />
        </Routes>
        <Footer />
        </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
