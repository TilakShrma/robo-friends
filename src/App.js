import React, {Component} from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';
import { Pacman } from 'react-pure-loaders'
import './App.css';
import ErrorBoundry from './Components/ErrorBoundry';
class App extends Component {
    constructor(){

        super();

        this.state = {
            robots : [],
            searchField : '',
            isLoading : true
        }

        this.onSearchChange = this.onSearchChange.bind(this);
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => response.json()
        )
        .then((users) => this.setState({robots : users  }))
    }

    onSearchChange(event){
        
        // Set the searchfield based on text in searchbar
        this.setState({
            searchField : event.target.value,
        })
    }

    render(){

        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });

        if(this.state.robots.length === 0){
            return <Pacman className="center-ns" loading={this.state.isLoading}/>
        }else{
            return(
                <div className="tc">
                    <h1 className="f3">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;