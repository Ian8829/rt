import React, {Component} from 'react';
import { selectItem } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class upPrice extends Component {
  constructor(props) {
    super(props);

    this.upPriceSorting = this.upPriceSorting.bind(this);
  }

  upPriceSorting() {
    return this.props.items
      .sort((a, b) => a.price - b.price)
      .map(item => {
        return (
          <li key={item.id}>
            <img src={item.img_src} className="itemPhoto"/>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </li>
        );
      });
  }


  render() {
    return(
        <ul className="itemDirection">
          {/*{this.renderItem()}*/}
          {/*{this.downPriceSorting()}*/}
          {this.upPriceSorting}
        </ul>
    );
  }
}


function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(upPrice);