import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import SinglePost from './Components/SinglePost';
import Post from './Components/Post';
import Project from './Components/Project';
import NavBar from './Components/NavBar';
import Header from './Components/Header';


function App() {
  return (
    <BrowserRouter>
    <Header />
      {/* <NavBar /> */}
      <Switch>
        <Route component={Home} path='/' exact />
        {/* <Route component={About} path='/about' /> */}
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/portfolio' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
