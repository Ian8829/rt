import React, {Component} from 'react';
import { selectItem } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'none'
    };

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem() {
    const renderListItem = item => {
      return (
        <li key={item.id}>
          <img src={item.img_src} className="itemPhoto"/>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </li>
      );
    };

    const { order } = this.state;

    if (order === 'up') {
      return this.props.items
        .sort((a, b) => a.price - b.price)
        .map(renderListItem);
    } else if (order === 'down') {
      return this.props.items
        .sort((a, b) => b.price - a.price)
        .map(renderListItem);
    }
    return this.props.items.map(renderListItem);
  }

  render() {
    return(
      <div className="itemList">
        <div className="itemIndex">
          <button onClick={() => this.setState({ order: 'down' })}>
            Price down
          </button>
          <button onClick={() => this.setState({ order: 'up' })}>
            Price up
          </button>
        </div>
        <ul className="itemDirection">
          {this.renderItem()}
        </ul>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);