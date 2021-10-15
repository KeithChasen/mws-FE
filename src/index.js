import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, split } from '@apollo/client';
import { createUploadLink } from "apollo-upload-client/public/index";
import { ApolloProvider } from '@apollo/client/react';
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

import App from './App';

const wsLink = new WebSocketLink({
  uri: process.env.WS_PROTOCOL+process.env.REACT_APP_WS_SERVER,
  options: {
    reconnect: true,
    timeout: process.env.WS_SERVER_TIMEOUT,
    reconnectionAttempts: 50,
    lazy: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
});

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
  uri: process.env.HTTP_PROTOCOL+process.env.REACT_APP_SERVER
}));

const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  );
}, wsLink, httpLink);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
