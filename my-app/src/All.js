import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './All.css';
import Slide from './Slide';
import Animate from './Animate';
import Sider from './Sider';

class All extends Component {
  render() {
    return (
      <div>
        <div id="header"></div>
        <div id="main">
          <Slide />
          <Animate/>
        </div>
        <div id="footer"></div>
        <Sider/>
        
      </div>
    );
  }
}

export default All;