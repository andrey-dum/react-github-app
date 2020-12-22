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
          <Route path="/info" component={Profile} />
          <Route path="/" component={Home} />

          
        </Switch>
      </div>
    </>
  );
}

export default App;
