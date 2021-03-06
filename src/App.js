import React from 'react';
import './global.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/login/login'
import Issue from './components/issue/issue'
import IssueCreate from './components/issue/issue_create'
import IssueDisplay from './components/issue/issue_display'
import Home from './components/home/home'
import Management from './components/management/management'
import UserCreate from './components/management/user_create'
import GroupCreate from './components/management/group_create'
import GroupEdit from './components/management/group_edit'
import Help from './components/help'
import AllIssues from './components/issue/list_all_issues'
import CredentialCreate from './components/credential/credential_create'



class App extends React.Component {

render() {
  return(
    <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/issue/find' component={Issue}/>
          <Route exact path='/issue/create' component={IssueCreate}/>
          <Route exact path='/issue/display/:id' component={IssueDisplay}/>
          <Route path='/issue/edit/:id' component={IssueCreate}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/management/main' component={Management}/>
          <Route exact path='/management/user/create' component={UserCreate}/>
          <Route exact path='/management/user/edit/:id' component={UserCreate}/>
          <Route exact path='/management/group/create' component={GroupCreate}/>
          <Route exact path='/management/group/edit' component={GroupEdit}/>
          <Route exact path='/help' component={Help}/>
          <Route exact path='/issue/all' component={AllIssues}/>
          <Route exact path='/credential/create' component={CredentialCreate}/>
        </Switch>
    </Router>
  );
}

}

export default App;
