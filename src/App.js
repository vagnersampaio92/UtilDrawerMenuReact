import React, { Component } from 'react';
import './styles.css';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrops from './components/Backdrop/Backdrop';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState)=>{
      
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };
  backdropClickHandler = ()=>{
    this.setState({sideDrawerOpen: false})
  }
  render() {
    
    let backdrop;
    if(this.state.sideDrawerOpen){
      
      backdrop = <Backdrops click={this.backdropClickHandler} />
    }
    return (
      < div style={{height:'100%' }} >
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      
      <main style={{ marginTop: '60px' }}>
        <p >page content</p>
      </main>

      </div >
    );
  }
}





export default App;
