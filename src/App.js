import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <div
          className='row align-items-center justify-content-center'
          style={{ height: '100vh' }}
        >
          <i className='fab fa-react mr-2' style={{ fontSize: '2rem' }} />
          <h5 className='text-primary pt-2'>React with Redux Bundle</h5>
        </div>
      </div>
    </Provider>
  );
};

export default App;
