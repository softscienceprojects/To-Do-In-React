import React from 'react'

class Tasks extends React.Component {

    handleClick = (e) => {
        // I know this doesn't REALLY work but the demo didn't either
        e.target.parentNode.remove()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let newTask = {
            text: event.target.children[0].value,
            category: event.target.children[1].value
        }
        console.log(newTask)
        this.props.addTask(newTask);
    }

    // taskChange = (event) => {
    // }

    render() {
        return (
          <div className ="tasks">
              <h5>Tasks</h5>
              <form className="new-task-form" onSubmit={this.handleSubmit}>
                  <input placeholder="New task details" type="text"></input>
                  <select>
                {this.props.catArray.map(category => category === 'All' ? null : <option>{category}</option>)}
                  </select>
                  <input type="submit" value="Add Task" />
              </form>
            { this.props.taskArray.map(task=> <div className="task"><div className="label" >{task.category}</div> <div className="text">{task.text}</div><button className="delete" onClick={(e)=> this.handleClick(e)}>X</button></div>)}
        </div>  
        )
    }


    // make copy of tasks array in tasks
    // click on the x
    // slice out of the task array
    // and re-render it


}

export default Tasks