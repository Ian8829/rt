import React, {Component} from 'react';
import { selectItem } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class downPrice extends Component {
  constructor(props) {
    super(props);

    this.downPriceSorting = this.downPriceSorting.bind(this);
  }

  downPriceSorting() {
    const mapItems = item => {
      return (
        <li key={item.id}>
          <img src={item.img_src} className="itemPhoto"/>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </li>
      );
    };

    return this.props.items
      .sort((a, b) => b.price - a.price)
      .map(mapItems);
  }

  render() {
    return(
        <ul className="itemDirection">
          {this.downPriceSorting()}
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

export default connect(mapStateToProps, mapDispatchToProps)(downPrice);