import React from 'react'

import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) =>{ (

  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <NavLink activeClassName="activeV2" to={`${match.url}/rendering`}>
          Rendering with React
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeV2" to={`${match.url}/components`}>
          Components
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeV2" to={`${match.url}/props-v-state`}>
          Props v. State
        </NavLink>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
  
)}

const p404 =()=>(
<div>
<h1> SORRY PAGE OT FOUND </h1>
</div>
)

const App = () => (
  <Router>
    <div>
      <ul className ="header">
        <li><NavLink  exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
      </ul>

      <hr/>
      <Switch> //handles only one thing ie. render first exact match that matches
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route component={Home}/> //we can replace with the p404 just incase someomne typed something that is not in the page
      </Switch>
    </div>
  </Router>
)
export default App