import React, {Component} from 'react';
import Layout from './components/Layout'
import './index.css';

class App extends Component {
  render(){
  return (
    <div className= "container">
      <Layout title = "TextTalk"/>
    </div>
  );
  }
}

export default App;
