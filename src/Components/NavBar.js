
import React, { Component } from 'react';



export default class NavBar extends Component {

 toggleMode = ()=>{
  if(this.state.mode === 'light'){
    this.setState({mode: 'dark'});
 document.body.style.backgroundColor = "rgb(3 36 68)";

  }
  else{
    this.setState({mode: 'light'});
 document.body.style.backgroundColor = "white";
             
  }
}

constructor(){
  super();
  console.log("Hello i am a constructor from NAVBAR component");
  this.state={
    mode: 'light',
  }
}
  render() {
    return (

      <>
      <div>
       

       <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsPulse</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
       <li className="nav-item">
          <a className="nav-link" href="/business">Business</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="/entertainment">Entertainment</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="/general">General</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="/health">Health</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="/science">Science</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="/sports">Sports</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="/technology">Technology</a>
        </li>
       
      </ul>
      <div className={`form-check form-switch text-${this.state.mode==="light"?"dark":"light"}`}>
  {/* here we are using backticks so with $ we can refer a variable here "{props.mode==="light"?"dark":"light"}" its
  a variable whole */}
  <input className="form-check-input" onClick={this.toggleMode} type="checkbox" id="flexswitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexswitchCheckDefault">Enable DarkMode</label>
</div>
      
    </div>
  </div>
</nav>
        
      </div>
      </>
    )
  }
}
