import React, { Component } from 'react';
import './form.css';
import Person from './Person.png';
import Phone from './Phone.png';
import Email from './Email.png';

class Form extends Component {
  constructor(props){ 
    super(props)
    this.state = {
      adults: 0,
      kids: 0,
      cabins: 0
      };
      this.handleAdultsIncrement = this.handleAdultsIncrement.bind(this)
  } 
  
handleAdultsIncrement = (prevState) => {
  this.setState({...prevState, adults: prevState.adults+1}, () => {
      console.log(this.state.adults)
  });
}

handleAdultsDecrement () {
  console.log('adults:', this.state.adults)
  this.setState({...this.state, adults: this.state.adults--})
};

  render () {
    return <div className="form">
        <label className="label">YOUR NAME</label>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <img src={Person}/>
          </span>
          <input type="text" className="form-control" placeholder="Enter your full name" id="name"/>
          </div>
          <label className="label">E-MAIL ADDRESS</label>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <img src={Phone}/>
          </span>
          <input type="text" className="form-control" placeholder="Enter your E-mail address" id="email"/>
</div>
<label className="label">PHONE NUMBER</label>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <img src={Email}/>
          </span>
          <input type="text" className="form-control" placeholder="Enter your phone number" id="phone"/>
</div>
<div className="increment-button-wrapper">
<div className="input-group mb-3 increment-buttons">
  <div>
<label className="label">ADULTS</label>
</div>
<div className="increment-display-wrapper">
  <button className="btn btn-left btn-outline-secondary" type="button" onClick={() => this.handleAdultsDecrement()}>-</button>
  <input type="text" className="form-control increment-display" value={this.state.adults} disabled={true} id="adults"/>
  <button className="btn btn-right btn-outline-secondary" type="button" onClick={() => this.handleAdultsIncrement()}>+</button>
  </div>
</div>
<div className="input-group mb-3 increment-buttons">
  <div>
<label className="label">KIDS</label>
</div>
<div className="increment-display-wrapper">
  <button className="btn btn-left btn-outline-secondary" type="button">-</button>
  <input type="text" className="form-control increment-display" value={this.state.kids} disabled={true} id="kids"/>
  <button className="btn btn-right btn-outline-secondary" type="button">+</button>
  </div>
</div>
<div className="input-group mb-3 increment-buttons">
  <div>
<label className="label">CABIN ROOMS</label>
</div>
<div className="increment-display-wrapper">
  <button className="btn btn-left btn-outline-secondary" type="button" onClick={() => this.handleDecrement("cabins")}>-</button>
  <input type="text" className="form-control increment-display" value={this.state.cabins} disabled={true} id="cabins"/>
  <button className="btn btn-right btn-outline-secondary" type="button">+</button>
  </div>
</div>
</div>
<button type="button" class="btn btn-primary submit-btn">COMPLETE YOUR BOOKING</button>

    </div>
  }
}

export default Form;
