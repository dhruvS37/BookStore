import logo from './logo.svg';
import React from 'react';
import './App.css';
import Title from './components/Title';
import Home from './pages/Home';
import Counter from './components/Counter';
import About from './pages/About';
import List from './components/List';
import LoginForm from './components/LoginForm';
import LifeCycleA from './components/LifeCycleA';
import FocusInput from './components/FocusInput';

class App extends React.Component {
  
  constructor(){
    super()

    this.state = {
      ishome : false ,
      isabout : false
    }
  }

  changeToHome = () =>{
    this.setState({
      ishome : true,
      isabout : false
    })
  }
  changeToAbout = () =>{
    this.setState({
      isabout : true,
      ishome:false
    })
  }
  

  render(){
    let page
      if (this.state.ishome) {
          page=<Home title="Home" description="this is Home page"/>
      }else if(this.state.isabout){
        page=<About title="About Section" description="this is About section"/> 
      }
    return (
      <div className="App">

        {/* <Home title="Home" description="this is Home page"/> 

        <Counter/>
        
        <About title="About Section" description="this is About section"/> */}

        {/* <br/>
        <button onClick={this.changeToHome}>Home</button>
        &emsp;
        <button onClick={this.changeToAbout}>About</button>
        {page} */}


        {/* <List/> */}

        {/* <LoginForm/> */}

        {/* <LifeCycleA/> */}

        <FocusInput/>
        
      </div>
    );
  }
}

export default App;
