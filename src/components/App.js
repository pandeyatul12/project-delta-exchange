import Signup from "./Signup";
import { Container } from 'react-bootstrap'
import { ProjectProvider } from "../contexts/ProjectContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    
    <Container className="d-flex align-items-center
    justify-content-center" 
    style={{ minHeight:'100vh'}}>
      <div className="w-100" style={{ maxWidth:'400px'}}>
      <Router>
        <ProjectProvider>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            
          </Switch>
        </ProjectProvider>
      </Router>
      </div>
    </Container>
    
  );
}

export default App;
