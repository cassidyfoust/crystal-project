import React, {Component} from 'react';

class IncrementInput extends Component {
    render() {
        return (
            <>
            <div className="input-group mb-3 increment-buttons">
                <div>
                    <label className="label">{this.props.label}</label>
                </div>
                <div className="increment-display-wrapper">
                    <button className="btn btn-left btn-outline-secondary" type="button" onClick={() => this.props.handleClick(this.props.id, 'subtract')}>-</button>
                    <input type="text" className="form-control increment-display" value={this.props.value} disabled={true}/>
                    <button className="btn btn-right btn-outline-secondary" type="button" onClick={() => this.props.handleClick(this.props.id, 'add')}>+</button>
                </div>
            </div>
            </>
        )
    }
}

export default IncrementInput;