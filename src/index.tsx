import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store'
import { Provider } from 'react-redux';
import { getUsers } from './store/features/posts/usersSlice';
//import { fetchUsers } from './store/features/posts/usersSlice';

//store.dispatch(fetchUsers())

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store} >
      <App />
    </Provider>
)