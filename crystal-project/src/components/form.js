import React, { Component } from 'react';
import './form.css';
import TextInput from './form/TextInput';
import Person from './form/Person.png';
import Email from './form/Email.png';
import Phone from './form/Phone.png';

class Form extends Component {
  state = {
    textInputs: [{
      label: 'YOUR NAME',
      icon: Person,
      placeholder: 'Enter your full name'
    },
    {
      label: 'E-MAIL ADDRESS',
      icon: Email,
      placeholder: 'Enter your E-mail address'
    },
    {
      label: 'PHONE NUMBER',
      icon: Phone,
      placeholder: 'Enter your phone number'
    }]
  }

  render () {
    return <div className="form">
      {this.state.textInputs.map((input) => {
        return <TextInput
        label={input.label}
        icon={input.icon}
        placeholder={input.placeholder}/>
      })}
<div className="increment-button-wrapper">
<div className="input-group mb-3 increment-buttons">
  <div>
<label className="label">ADULTS</label>
</div>
<div className="increment-display-wrapper">
  <button className="btn btn-left btn-outline-secondary" type="button">-</button>
  <input type="text" className="form-control increment-display" value="0" disabled={true} id="adults"/>
  <button className="btn btn-right btn-outline-secondary" type="button">+</button>
  </div>
</div>
<div className="input-group mb-3 increment-buttons">
  <div>
<label className="label">KIDS</label>
</div>
<div className="increment-display-wrapper">
  <button className="btn btn-left btn-outline-secondary" type="button">-</button>
  <input type="text" className="form-control increment-display" value="0" disabled={true} id="kids"/>
  <button className="btn btn-right btn-outline-secondary" type="button">+</button>
  </div>
</div>
<div className="input-group mb-3 increment-buttons">
  <div>
<label className="label">CABIN ROOMS</label>
</div>
<div className="increment-display-wrapper">
  <button className="btn btn-left btn-outline-secondary" type="button">-</button>
  <input type="text" className="form-control increment-display" value="0" disabled={true} id="cabins"/>
  <button className="btn btn-right btn-outline-secondary" type="button">+</button>
  </div>
</div>
</div>
<button type="button" class="btn btn-primary submit-btn">COMPLETE YOUR BOOKING</button>

    </div>
  }
}

export default Form;
