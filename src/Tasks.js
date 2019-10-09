import React from 'react'

class Tasks extends React.Component {

    render() {
        return (
          <div className ="tasks">
              <h5>Tasks</h5>
              <form class="new-task-form">
                  <input placeholder="New task details" type="text"></input>
                  <select>
                {this.props.catArray.map(category => <option>{category}</option>)}
                  </select>
                  <input type="submit" value="Add Task" />
              </form>
            { this.props.taskArray.map(task=> <div className="task"><div className="label">{task.category}</div> <div className="text">{task.text}</div><button className="delete">X</button></div>)}
        </div>  
        )
    }

}

export default Tasks