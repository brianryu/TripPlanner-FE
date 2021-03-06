import React from 'react';

class ToDoList extends React.Component {

    render() {
        console.log(this.props.trip)
        return (
            <div>
            <form onSubmit={(event) => {}}>
            <label>Enter New Itinerary Item: </label>
            <input placeholder="Type Here" name="task" type="text" onChange={this.handleChange} value={this.props.task}/>
            <input type="submit"/>
            </form>

            <ul>
                <p>Trip Begins: {this.props.trip.start_date} </p>
                <p>Trip Ends: {this.props.trip.end_date} </p>
                {/* <p>Priority Level of Trip: {this.props.trip.priority_lvl} </p> */}
                <p>Itinerary:</p>
                <ul>
                {this.props.trip.tasks.map(task => <li> {task.message} </li>)}
                </ul>
            </ul>
            </div>

        )
    }
    
}

export default ToDoList;