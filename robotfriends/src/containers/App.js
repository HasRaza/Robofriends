import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import error from '../components/error';
import './App.css';

class App extends Component {

  
  constructor() {
    super()
    this.state = {
      robots: [],   //CardList #3: getting array from the robots their names,ids,emails.
      searchfield: '' // searchBox 3 it has whatever Users type 
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // the data from here sit
      .then(response=> response.json()) // read the data turn into react language 
      .then(users => {this.setState({ robots: users})}); // getting data and puting everying into 'robots 
  }

  onSearchChange = (event) => { // this eventlistener 
    this.setState({ searchfield: event.target.value })  // searchBox #2:  just storaging whatever users type puting in  super()
    // setState will put in Supter()
  }

////  ------------this component will do work filler what we type in the search>
  render() {      
    const { robots, searchfield } = this.state;/// this will storage some in super()
    // its like (robots = this.state.robots)
    // its like (robots = this.state.robots)

      const filteredRobots = robots.filter(robot =>{ // Cardlist #2 : ("look at Cardlist component  robots ={filteredRobots")
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //#3 : this try seacrh whatevr users type, it like if (1=1)
    })
    //-------------------------------------------------->

          // right here is just html with css 
      //     !robots.length ?  
      // <h1>Loading</h1> :

    return (
        <div className='tc'>
          <h1 className='f2'>The robots family</h1>
          <SearchBox 
          searchChange={this.onSearchChange}/> {/* seacrhBox #1: events listenter */}
          <Scroll>
         {/* <error> */}
            <CardList robots={filteredRobots} /> {/* CardList #1:  this will get whatever is in data      ("look that the rander") */}
            {/* </error> */}
          </Scroll>
        </div>
      );
  }
}

export default App;