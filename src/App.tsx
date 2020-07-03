import React from 'react';

import './App.css';
import { Route } from 'wouter';
import { Home } from 'pages/Home';
import { SearchResults } from 'pages/SearchResults';
import { Detail } from 'pages/Detail';

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <Route path='/' component={Home} />
        <Route path='/search/:keyword'>
          {(params) => <SearchResults params={params} />}
        </Route>
        <Route path='/gif/:id' component={Detail} />
      </section>
    </div>
  );
}

export default App;
