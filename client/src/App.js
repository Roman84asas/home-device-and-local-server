import React from 'react';
import { Route } from 'react-router-dom';

import {Home, Auth, Device} from "./pages";

function App() {
  return (
      <div className="wrapper">
          <Route exact path={["/login", "/signup"]} component={Auth} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Device} />
      </div>
  );
}

export default App;