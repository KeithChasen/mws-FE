import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from "apollo-upload-client/public/index";
import { ApolloProvider } from '@apollo/client/react';
import { setContext } from "@apollo/client/link/context";

import App from './App';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const httpLink = authLink.concat(createUploadLink({
  uri: process.env.REACT_APP_SERVER
}));

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
