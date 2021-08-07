import React, { Component } from 'react'
import Todo from './pages/todo'
import Entry from './components/Entry'
import {Switch,Route,Redirect} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path ="/entry" component={Entry}/>
                    <Route path="/todo" component={Todo}/>
                    <Redirect to="/entry"/>
                </Switch>
            </div>
        )
    }
}
