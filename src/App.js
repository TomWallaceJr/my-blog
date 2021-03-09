import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import SinglePost from './Components/SinglePost';
import Post from './Components/Post';
import Portfolio from './Components/Portfolio';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Portfolio} path='/portfolio' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
