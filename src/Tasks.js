import React from 'react'

class Tasks extends React.Component {

    handleDeleteClick = (e) => {
        // I know this doesn't REALLY work but the demo didn't either
        let removeTask = e.target.parentNode.children[1].innerText
        this.props.removeATask(removeTask)
       // e.target.parentNode.remove()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let newTask = {
            text: event.target.children[0].value,
            category: event.target.children[1].value
        }
        this.props.addTask(newTask);
        event.target.reset();
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
            { this.props.taskArray.map(task=> <div className="task"><div className="label" >{task.category}</div> <div className="text">{task.text}</div><button className="delete" onClick={(e)=> this.handleDeleteClick(e)}>X</button></div>)}
        </div>  
        )
    }


    // make copy of tasks array in tasks
    // click on the x
    // slice out of the task array
    // and re-render it


}

export default Tasks