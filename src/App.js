//import { render } from "@testing-library/react";
import React, {Component} from "react";
import CardList from "./CardList";
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll'



class App extends Component{
    constructor(){
        super()
        this.state ={
        robots: robots,
    searchfield: ''
    };

  
        
    
        
      
    
}   
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
       
        
    
    }
    render() {
        const filteredRobots =  this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>

                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            
        );

    }

    
}
export default App