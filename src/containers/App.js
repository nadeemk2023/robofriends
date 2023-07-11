import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList.component';
import SearchBox from '../components/SearchBox.component.js';
import Scroll from '../components/Scroll.component';
import ErrorBoundary from '../components/ErrorBoundary.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <div className="vh-100 flex justify-center items-center">
        <h1 className="f2">Loading...</h1>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f2">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
