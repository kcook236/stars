import React, {Component} from 'react';
import '../styles/App.css';
const stars = "https://swapi.co/api/vehicles/"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({
      pilot: this.state.value,
      value: ""
    })
  }

  componentDidMount(){
    fetch(stars).then((response) => {return response.json()})
    .then((data) => {
      let starships = data.results
      this.setState({starships:starships})
    })
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:



  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    let battalion = this.state.vehicles
    //battalion is an array for starships
    let starships = battalion.map((starships) => {
      return(
        <div key={starships.name}>
          <div className="card">
            <div className="card-block">
              <h2 className="card-title">Vehicle: {starships.name}</h2>
              <h3 className="card-subtitle">Model: {starships.model}</h3>
              <div className= "card">
                <div className="card-block">
                  <h4 className="card-subtitle">Specs</h4>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Manufacturer: {starships.manufacturer}</li>
                    <li class="list-group-item">Class: {starships.vehicle_class}</li>
                    <li class="list-group-item">Passengers: {starships.passengers}</li>
                    <li class="list-group-item">Crew: {starships.crew}</li>
                    <li class="list-group-item">Length: {starships.length}</li>
                    <li class="list-group-item">Max Speed: {starships.max_atmosphering_speed}</li>
                    <li class="list-group-item">Cargo Capacity: {starships.cargo_capacity}</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <div>
          <section>
            <div className="jumbotron">
              <h1>Star Wars</h1>
              <p>The Vehicles of Star Wars</p>
            </div>
            <div className= "card form">
              <div className="card-block">
                <h2 className="card-title"> What is your name, pilot?</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input className="form-control" id="pilotName" onChange={this.handleNameChange} name="name" type="text" value={this.state.value} placeholder="Enter your name, pilot."/>
                  </div>
                  <button type="submit" className="btn">Submit</button>
                </form>
                <h1>{this.state.pilot}</h1>
              </div>
            </div>
            <div className="row">{vehicles}</div>
          </section>
        </div>
      </div>
    )
  }
}


export default App
