import React from 'react';
import { Route } from 'react-router-dom';

import SulaApp from './components/SulaApp';
import AdminPage from './components/AdminPage';


const App = () => {
 
  
    return (
      <div>
          <Route path="/" exact component={SulaApp} />
          <Route path="/admin" exact component={AdminPage} />
      </div>
  );
}

export default App;