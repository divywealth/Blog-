import Navbar from './Navbar';
import Homepage from './Homepage';
import Create from './Pages/Create';
import BlogDetails from './Pages/BlogDetails';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogdetails/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
