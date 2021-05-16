import {BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
import { Profile } from './Profile';
import { Login } from './Login';

function App() {
  return (
   <Router>
   
   <Switch>
   
    <Route exact path="/login" component={Login}/>
    <Route exact path="/profile" component={()=><Profile authorized={true}/>}/>
   
   </Switch>
   
   </Router>
  );
}

export default App;
