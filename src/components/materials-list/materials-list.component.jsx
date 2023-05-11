import { Component } from 'react';
import InputBox from '../input-box/input-box.component';

class MaterialsList extends Component {

    render() {

        const { materials } = this.props
        
        if (!materials || Object.keys(materials).length === 0) {
            return (
            <div>
                <h4>Materials Required</h4>
                <p>Empty Basket</p>
            </div>
            )
        }


        return (
            <div>
              <h4>Materials Required</h4>
              {Object.entries(materials).map(([name, amount]) => (
                <InputBox
                  key={name}
                  className={`${name.toLowerCase()}-input-box`}
                  placeholder={name}
                  value={amount}
                />
              ))}
            </div>
          )
    }
}

export default MaterialsList