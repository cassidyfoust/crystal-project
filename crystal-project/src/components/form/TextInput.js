import React, {Component} from 'react';
import Person from './Person.png';

class TextInput extends Component {
    render() {
        return (
            <>
            <label className="label">{this.props.label}</label>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                <img src={this.props.icon}></img>
            </span>
            <input type="text" className="form-control" placeholder={this.props.placeholder} id="name"/>
            </div>
            </>
        )
    }
}

export default TextInput;