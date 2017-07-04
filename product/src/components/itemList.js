import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { fetchItems } from '../actions/index';

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'none'
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentWillMount() {
    this.props.fetchItems();
  }

  renderItem() {
    const { order } = this.state;
    const { items } = this.props;

    const renderListItem = (item) => {
      const { seq, brand, thumb_image_url, name, price } = item;

      return (
        <li key={seq} className="itemSet">
          <img src={thumb_image_url} className="itemPhoto"/>
          <p className="itemName">{brand} {name}</p>
          <p className="itemPrice">₩ {price}</p>
        </li>
      );
    };

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
        .sort((a, b) => a.brand.localeCompare(b.brand))
        .map(renderListItem);
    }
    return items.map(renderListItem);
  }



  render() {
    return(
      <div className="itemList">
        <div className="itemIndex">
          <a onClick={() => this.setState({ order: 'down' }) }>
            정렬기준: 가격 ▽
          </a>
          <a onClick={() => this.setState({ order: 'up' })}>
            정렬기준: 가격 △
          </a>
          <a onClick={() => this.setState({ order: 'alphabet' })}>
            정렬기준: 상품명
          </a>
        </div>
        <div>
          <ul className="itemDirection">
            {this.renderItem()}
          </ul>
        </div>
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
  return bindActionCreators({fetchItems}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);