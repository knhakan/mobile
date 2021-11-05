import Homepage from "./components/Homepage";
import VehiclesOverview from "./components/VehiclesOverview";
import Vehicle from "./components/Vehicle";
import CreateListing from "./components/CreateListing";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Homepage />
          </Route>
          <Route path="/overview" >
            <VehiclesOverview />
          </Route>
          <Route path="/vehicle/:vehicle_id" >
            <Vehicle />
          </Route>
          <Route path="/createlisting" >
            <CreateListing />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
