import React, {Component} from 'react'

import './App.css';
import './App.scss';
import { Content } from 'carbon-components-react';
import DataCapHeader from './components/DataCapHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import DataCap from './content/DataCap';
import Invoices from './content/Invoices';
class App extends Component {



  constructor(props){
    super(props);
    this.state = {
      message : ""
    }
  }
  render(){
    return (
      <div>

        <DataCapHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/DataCap" component={DataCap} />
            <Route path="/Invoices" component={Invoices} />
          </Switch>
      </Content>
      </div>
    );
  }
}

export default App;
