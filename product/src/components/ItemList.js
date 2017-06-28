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
          <p>₩ {item.price}</p>
        </li>
      );
    };

    const { order } = this.state;
    const { items } = this.props;

    if (order === 'up') {
      return items
        .sort((a, b) => a.price - b.price)
        .map(renderListItem);
    } else if (order === 'down') {
      return items
        .sort((a, b) => b.price - a.price)
        .map(renderListItem);
    } else if (order === 'alphabet') {
      return items
        .sort((a, b) => a.title.localeCompare(b.title))
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
          <button onClick={() => this.setState({ order: 'alphabet' })}>
            alphabet
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