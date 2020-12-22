import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from 'react-router'
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";


function App() {
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/profile/:name" component={Profile} />
          <Route path="/" exact component={Home} />

          
        </Switch>
      </div>
    </>
  );
}

export default App;
