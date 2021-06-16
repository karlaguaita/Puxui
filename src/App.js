import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./view/main"


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <MainView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function MainView() {
  return (
    <div className="App">
      <Main/>
    </div>
  )
}
