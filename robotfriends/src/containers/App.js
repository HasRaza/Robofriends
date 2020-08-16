import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import error from '../components/error';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],   // getting array from the robots their names,ids,emails.
      searchfield: '' // we use it in line 21-23 the value of is none now. In line 22 will get the value.
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })   // this line is getting from 
                                                                //line 7 ( class App extends Component )
  }

////  ------------this component will do work filler what we type in the search>
  render() {      
    const { robots, searchfield } = this.state;

          const filteredRobots = robots.filter(robot =>{ // this functin dose the work!!
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    //-------------------------------------------------->

          // right here is just html with css 

    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f2'>The robots family</h1>
          <SearchBox searchChange={this.onSearchChange}/>{/*here will get the line 21*/}
          <Scroll>
         <error>
            <CardList robots={filteredRobots} /> {/*//here get line 30!*/}
            </error>
          </Scroll>
        </div>
      );
  }
}

export default App;