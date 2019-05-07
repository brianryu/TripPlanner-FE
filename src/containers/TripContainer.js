import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import TripList from "./TripList";
import PlanForm from "../components/PlanForm";
import TripShow from './TripShow'

class TripContainer extends React.Component {
  state = {
    trips: []
  };

  componentDidMount() {
    fetch("http://localhost:3005/api/v1/todos")
      .then(response => response.json())
      .then(tripArray => {
        this.setState({
          trips: tripArray
        });
      });
  }

  newTrip = (event, tripObj) => {
    event.preventDefault();
    console.log(event);
    let newArray = [...this.props.trips, tripObj];
    this.setState({
      trips: newArray
    });
    console.log(this.props.trips);
  };

  handleSubmit = (event, taskObj) => {
    event.preventDefault();
    console.log(taskObj);
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/trips/:id" render={(props) => {
              
              
              const foundTrip = this.state.trips.find(trip => {
                    
                  return trip.id === parseInt(props.match.params.id)
              })

              if (foundTrip === undefined) {
                  props.history.push("/")
                  return
              } else {
                  return (
                      <TripShow eachTrip={foundTrip}/>
                  )
              }
          }}/>

          <Route
            path="/trips"
            render={props => {
              return (
                <div>
                  <PlanForm newTrip={this.newTrip} />

                  <h1>Your Trips</h1>
                  {this.state.trips.map(tripObj => {
                    return <TripList eachTrip={tripObj.trip} />;
                  })}
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default TripContainer;
