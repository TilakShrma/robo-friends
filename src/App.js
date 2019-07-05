import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';
import './App.css';
import ErrorBoundry from './Components/ErrorBoundry';
import { setSearchField, requestRobots } from './Action';

const mapStateToProps = (state) => {
    return {
        searchField : state.searchRobots.searchField,
        robots : state.requestRobots.robots,
        isPending : state.requestRobots.isPending,
        error : state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots : () => dispatch(requestRobots())
    }
}
class App extends Component {

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){

        const {searchField, onSearchChange, robots } = this.props;

        const filteredRobots = robots.filter((robot) => {
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