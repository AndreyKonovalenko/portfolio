import React from 'react';
import About from './views/About';
import Contacts from './views/Contacts';
import Work from './views/Work';
import Layout from './layout/Layout';
//import Layout from './components/Layout';
import { Route, Switch } from 'react-router-dom'

const App = () => {
  const routes = (
    <div>
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/work' exact component={Work} />
        <Route path='/contacts' exact component={Contacts} />
      </Switch>
    </div>
  );
  return (<Layout>{routes}</Layout>);
};

export default App;
