import './App.scss';
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import FirebaseConfig from "./Firebase/firebaseConfig"
import firebase from 'firebase'
import SignIn from './Pages/SignIn';
import AdminDashboard from './Pages/AdminDashBoard.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={SignIn} />
        <Route path="/AdminDashboard" component={AdminDashboard} />
      </Router>
    </div>
  );
}

export default App;
