import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Categories from './Categories'
import Tasks from './Tasks'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ], 
    // set a category in state
    category: 'All'
  }

  addNewTask = obj => {
    this.setState({
      tasks: [...this.state.tasks, obj], 
      category: this.state.category
    })
  }

  // setState function
  changeCategories = (name) => {
    this.setState({
      tasks: [...this.state.tasks],
      category: name
    })
  }

  filterCategories = () => {
    if (this.state.category === "All") {
      return this.state.tasks
     } else {
       return this.state.tasks.filter(task=> task.category === this.state.category)}
    }

  //that sets the app category state as that category

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>  
        {/* send that to child component categories */}
        <Categories catArray={CATEGORIES} change={this.changeCategories} />
        <Tasks catArray={CATEGORIES} taskArray={this.filterCategories()} addTask={this.addNewTask} />
      </div>
    );
  }
}


export default App;
