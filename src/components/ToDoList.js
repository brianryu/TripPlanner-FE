import React from 'react';

class ToDoList extends React.Component {

    state = {
        task: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(event) => {}}>
            <label>Enter New Itinerary Item: </label>
            <input placeholder="Type Here" name="task" type="text" onChange={this.handleChange} value={this.state.task}/>
            <input type="submit"/>
        </form>
        )
    }
    
}

export default ToDoList;