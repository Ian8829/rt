import React, { Component } from 'react';

export default class ItemMenu extends Component {
  render() {
    return(
      <div className="itemMenu">
        <ul className="itemIndex">
          <li>전체</li>
          <li>전자기기</li>
          <li>취미</li>
          <li>생필품</li>
          <li>여행/레저</li>
          <li>건강</li>
          <li>뷰티</li>
          <li>상품권</li>
          <li>유아동</li>
          <li>패션</li>
          <li>식품</li>
        </ul>
        {/*<ul className="itemSorting">*/}
          {/*<li>정렬기준: </li>*/}
        {/*</ul>*/}
      </div>
    );
  }
}