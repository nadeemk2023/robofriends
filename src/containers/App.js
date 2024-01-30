import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList.component';
import SearchBox from '../components/SearchBox.component.js';
import Scroll from '../components/Scroll.component';
import ErrorBoundary from '../components/ErrorBoundary.component';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  });

  return !robots.length ? (
    <div className='vh-100 flex justify-center items-center'>
      <h1 className='f2'>Loading...</h1>
    </div>
  ) : (
    <div className='tc'>
      <h1 className='f2'>Robofriends</h1>
      <SearchBox searchChange={e => setSearchField(e.target.value)} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default App;
