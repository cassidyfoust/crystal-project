import React, { Component } from 'react';
import './form.css';
import TextInput from './form/TextInput';
import IncrementInput from './form/IncrementInput';
import Person from './form/Person.png';
import Email from './form/Email.png';
import Phone from './form/Phone.png';

class Form extends Component {
  state = {
    textInputs: {
      0: {
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
      }
    },
    incrementInputs: {
      0: {
        label: 'ADULTS',
        value: 0
      },
      1: {
        label: 'KIDS',
        value: 0
      },
      2: {
        label: 'CABIN ROOMS',
        value: 0
      }
    }
  }

  // function to handle input change for text inputs
  handleInputChange(evt, id) {
    this.setState({
      textInputs: {
        ...this.state.textInputs,
        [id]: {
          ...this.state.textInputs[id],
          value: evt.target.value
        }
      }
    })
  }

  // function to handle incrementation of inputs
  handleClick(id, modifier) {
    if (modifier === 'add') {
      this.setState({
        incrementInputs: {
          ...this.state.incrementInputs,
          [id]: {
            ...this.state.incrementInputs[id],
            value: (this.state.incrementInputs[id].value + 1)
          }
        }
      })
    } else {
      this.setState({
        incrementInputs: {
          ...this.state.incrementInputs,
          [id]: {
            ...this.state.incrementInputs[id],
            value: (this.state.incrementInputs[id].value - 1)
          }
        }
      })
    }
  }

  // function to clear inputs upon click of the Complete Your Booking button
  clearInputs = () => {
    this.setState({
      textInputs: {
        0: {
          ...this.state.textInputs[0],
          value: ''
        },
        1: {
          ...this.state.textInputs[1],
          value: ''
        },
        2: {
          ...this.state.textInputs[2],
          value: ''
        }
      },
      incrementInputs: {
        0: {
          ...this.state.incrementInputs[0],
          value: 0
        },
        1: {
          ...this.state.incrementInputs[1],
          value: 0
        },
        2: {
          ...this.state.incrementInputs[2],
          value: 0
        }
      }
    })
  }

  render() {
    return <div className="form">
      {Object.keys(this.state.textInputs).map(([key, textValue]) => {
        if (this.state.textInputs[key] === undefined) { return } else {
          return <TextInput
            label={this.state.textInputs[key].label}
            icon={this.state.textInputs[key].icon}
            placeholder={this.state.textInputs[key].placeholder}
            value={this.state.textInputs[key].value}
            id={key}
            onChange={this.handleInputChange.bind(this)}
          />
        }
      })}
      <div className="increment-button-wrapper">
        {Object.keys(this.state.incrementInputs).map(([key, textValue]) => {
          return <IncrementInput
            label={this.state.incrementInputs[key].label}
            value={this.state.incrementInputs[key].value}
            id={key}
            handleClick={this.handleClick.bind(this)} />
        })}
      </div>
      <button type="button" className="btn btn-primary submit-btn" onClick={() => { this.clearInputs() }}>COMPLETE YOUR BOOKING</button>
    </div>
  }
}

export default Form;
