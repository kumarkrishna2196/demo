import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import  {store} from './store/store';
import {Provider} from 'react-redux';
function App() {
  return (
    <div className="App" >
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
