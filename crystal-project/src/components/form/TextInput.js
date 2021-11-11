import React, { Component } from 'react';

class TextInput extends Component {
    render() {
        return (
            <>
                <div className="text-input-wrapper">
                    <label className="label">{this.props.label}</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <img src={this.props.icon}></img>
                        </span>
                        <input type="text" className="form-control" placeholder={this.props.placeholder} value={this.props.value} onChange={(event) => { this.props.onChange(event, this.props.id) }} />
                    </div>
                </div>
            </>
        )
    }
}

export default TextInput;