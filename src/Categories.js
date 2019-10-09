import React from 'react'

class Categories extends React.Component {

    handleClick = (e) => {
        //console.log(e.target)
        this.props.change(e.target.innerText)
    }

    render() {
        return (
          <div className ="categories">
                {/* // in create component - on Click function that handles the butotn click */}
            { this.props.catArray.map(category=> <button onClick={(e)=> this.handleClick(e)}>{category}</button>)}
        </div>  
        )
    }

}

export default Categories