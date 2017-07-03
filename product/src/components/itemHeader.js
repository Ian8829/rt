import React, { Component } from 'react';

export default class itemHeader extends Component {
  render() {
    return(
      <div className="header">
        <p className="headerTitle">100% 당첨! 꽝 없는 랜덤박스</p>
        <p className="headerContent">
          엄선된 최신 핫아이템만 모은 랜덤박스!
          <br/>랜덤투유의 핫 아이템, 지금 바로 확인해보세요.
        </p>
      </div>
    );
  }
}