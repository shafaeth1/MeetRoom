import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from '../src/redux/store';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {QueryClient, QueryClientProvider,} from 'react-query'

const queryClient = new QueryClient()

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>
);


