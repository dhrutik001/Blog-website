import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Post from './components/Post';


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
          <Route path='/post/:postId' render={(props) => <Post />} />        
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
