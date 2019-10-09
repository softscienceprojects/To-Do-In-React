import React from 'react'

class Tasks extends React.Component {

    render() {
        return (
            // {CATEGORIES.map(category=> <button>{category}</button>)}
          <div className ="tasks">
              <h5>Tasks</h5>
            { this.props.taskArray.map(task=> <div className="task"><div className="label">{task.category}</div> <div className="text">{task.text}</div></div>)}
        </div>  
        )
    }

}

export default Tasks