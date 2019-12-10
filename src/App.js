import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './components/login/login'
import Issue from './components/issue/issue'
import IssueCreate from './components/issue/issue_create'



function App() {
  return (
    <div>
    <Link to="/issues">Props!!!</Link>
    <Header />
    <Main />
    </div>
  );
}


class Header extends React.Component {
  render() {
    return <h1>header!m</h1>;
  }
}

function Users() {
  return <h2>Users</h2>;
}


class Main extends React.Component {
  render() {
  return(

  <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/issue' component={Issue}/>
        <Route exact path='/issue_create' component={IssueCreate}/>
      </Switch>
  </Router>

  );
}

}


export default App;
