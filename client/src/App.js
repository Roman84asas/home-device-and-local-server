import React from 'react';
import { Route } from 'react-router-dom';

import {Home, Auth} from "./pages";

function App() {
  return (
      <div className="wrapper">
          <Route exact path={["/login", "/signup"]} component={Auth} />
          <Route exact path="/" component={Home} />
      </div>
  );
}

export default App;