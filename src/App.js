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
import UserList from './components/UserList';
import RenderPropComponents from './components/RenderPropComponents';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import Users from './components/Users';
import Post from './components/Post';
import CounterHook from './components/CounterHook';
import HookCounter2 from './Tutorial/HookCounter2'
import HookMouse from './Tutorial/HookMouse';
import MouseContainer from './Tutorial/MouseContainer';
import PostDetail from './components/PostDetail';
import CounterReducer from './components/CounterReducer';
import CountyerReducerObject from './components/CountyerReducerObject';
import RegisterUser from './components/RegisterUser';

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
        <button style={{background:'green',color:'white',padding:'10px'}} onClick={this.changeToHome}>Home</button>
        &emsp;
        <button style={{background:'green',color:'white',padding:'10px'}} onClick={this.changeToAbout}>About</button>
        {page} */}


        {/* <List/> */}

        {/* <LoginForm/> */}

        {/* <LifeCycleA/> */}

        {/* <FocusInput/> */}

        {/* <Home/> */}

        {/* <RenderPropComponents render={()=>(
            <h3>I am coming from render props</h3>
        )}/> */}

        {/* <UserProvider value='Dhruv Sanghani'>
          <ComponentC/>
        </UserProvider> */}

        {/* <Users/> */}
        {/* <Post/> */}

        {/* <CounterHook/> */}

        {/* <LoginForm/> */}

        {/* <HookStateObject/> */}
        {/* <HookMouse/> */}
        {/* <MouseContainer/> */}
        
        {/* <PostDetail/> */}

        {/* <CounterReducer/> */}
        {/* <CountyerReducerObject/> */}

        <RegisterUser/>
      </div>
    );
  }
}

export default App;
