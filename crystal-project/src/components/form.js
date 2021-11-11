import React, { Component } from 'react';
import './form.css';
import TextInput from './form/TextInput';
import Person from './form/Person.png';
import Email from './form/Email.png';
import Phone from './form/Phone.png';

class Form extends Component {
  state = {
    textInputs: {0:{
      label: 'YOUR NAME',
      icon: Person,
      placeholder: 'Enter your full name',
      value: ''
    },
    1: {
      label: 'E-MAIL ADDRESS',
      icon: Email,
      placeholder: 'Enter your E-mail address',
      value: ''
    },
    2: {
      label: 'PHONE NUMBER',
      icon: Phone,
      placeholder: 'Enter your phone number',
      value: ''
    }},
    incrementInputs: [{
      name: 'adults',
      label: 'ADULTS',
      value: 0
    },
    {
      name: 'kids',
      label: 'KIDS',
      value: 0
    },
    {
      name: 'cabins',
      label: 'CABIN ROOMS',
      value: 0
    }]
  }

  handleInputChange(evt, id) {
    this.setState({
      textInputs: {
        ...this.state.textInputs,
        [id]: {
          ...this.state.textInputs[id],
          value: evt.target.value
        }
      }})
  }

  clearInputs = () => {
    this.setState({textInputs: {0: {...this.state.textInputs[0],
      value: ''
    },
    1: {...this.state.textInputs[1],
      value: ''
    },
    2: {...this.state.textInputs[2],
      value: ''
    }}
  })
  }

  render () {
    return <div className="form">
      {Object.keys(this.state.textInputs).map(([key, textValue]) => {
        if(this.state.textInputs[key] === undefined) {return} else {
        return <TextInput
        label={this.state.textInputs[key].label}
        icon={this.state.textInputs[key].icon}
        placeholder={this.state.textInputs[key].placeholder}
        value={this.state.textInputs[key].value}
        id={key}
        onChange={this.handleInputChange.bind(this)}
        />}
      })}
<div className="increment-button-wrapper">
  {this.state.incrementInputs.map((input) => {
    return <div className="input-group mb-3 increment-buttons">
    <div>
  <label className="label">{input.label}</label>
  </div>
  <div className="increment-display-wrapper">
    <button className="btn btn-left btn-outline-secondary" type="button">-</button>
    <input type="text" className="form-control increment-display" value={input.value} disabled={true}/>
    <button className="btn btn-right btn-outline-secondary" type="button">+</button>
    </div>
  </div>
  })}
</div>
<button type="button" className="btn btn-primary submit-btn" onClick={() => {this.clearInputs()}}>COMPLETE YOUR BOOKING</button>
    </div>
  }
}

export default Form;
