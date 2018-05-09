import React from 'react'
import Home from './Home/index.jsx'
import User from './User/index.jsx'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'


class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/user" component={User}/>
                </Switch>
            </Router>    
        )
    }
}

export default App

