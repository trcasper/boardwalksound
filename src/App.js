import React from "react";
import Landing from './Components/Landing';
import {HashRouter} from 'react-router-dom';
import routes from './routes';

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Landing />
          {routes}
        </div>
      </HashRouter>
    )
  }
}

export default App;


