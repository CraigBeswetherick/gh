import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import Theme from "./Theme/Theme";
import { Switch, Route, Router } from "react-router-dom";
import "./App.scss";

// Utils
import history from "./Utils/History";
import Routes from "./Utils/Routes";

// Init Firebase
import "./Utils/Firebase";

// Auth
export const AuthContext = React.createContext({});

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <div className="App">
        <MuiThemeProvider theme={Theme}>
          <Router history={history}>
            <Switch>
              {Routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main()}
                />
              ))}
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
