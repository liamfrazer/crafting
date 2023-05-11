import  { Component } from 'react';

class InputBox extends Component {

    render() {
        return (
            <div>
                {this.props.placeholder}:
            <input 
            className={this.props.className}
            type='number'
            min={0}
            placeholder={"Enter amount..."}
            label={this.props.placeholder}
            onChange={this.props.onChangeHandler}
            value={this.props.value}>
            </input>
            </div>
        )
    }
}

export default InputBox;