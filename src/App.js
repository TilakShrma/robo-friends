import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';
import './App.css';
import ErrorBoundry from './Components/ErrorBoundry';
import { setSearchField } from './Action';

const mapStateToProps = (state) => {
    return {
        searchField : state.searchField,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange : (event) => dispatch(setSearchField(event.target.value))
    }
}
class App extends Component {
    constructor(){

        super();

        this.state = {
            robots : []
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => response.json()
        )
        .then((users) => this.setState({robots : users}))
    }

    render(){

        const {searchField, onSearchChange } = this.props;

        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });

        return(
            <div className="tc">
                <h1 className="f3">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
        
    }
}

// connect() returns a function which executes App, that's why App is put inside ()
export default connect(mapStateToProps, mapDispatchToProps)(App);