import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
        this.grabFunction();
    }

    // fetch function send a request to our server, and then store all the informations to the variable 'data'
    //'data' use the same format with our informations to be printed as an array : the format "json"
    grabFunction(){
        fetch('/tickets/seeddata')
            .then(data => {
                console.log(data);
                return data.json();
            })
            .then(allData => this.setState({data: allData}))
    }

    // now we iterate the array via a variable, and for each element in our array, we print the corresponding informations
  render() {
        const ticketInfo = this.state.data.map((eachEl, index) =>{
           return(
               <div key={index}>
                   <h4>{eachEl.ticket_person_reporting}</h4>
                   <p>{eachEl.ticket_problem_description}</p>
                   <pre>{eachEl.ticket_date}</pre>
                   <hr/>
               </div>
           )
        });
    return (
      <div className="App">
          {ticketInfo}
      </div>
    );
  }
}

export default App;
