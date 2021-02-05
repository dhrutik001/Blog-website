import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CreatePost from './components/CreatePost';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          {/* <Route exact to='/' render={(props) => <Home />} /> */}
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/createpost'>
            <CreatePost />
          </Route>
        
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
