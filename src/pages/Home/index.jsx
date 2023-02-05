import Label from 'components/atoms/Label';
import React, { Component } from 'react';

// styles
import './index.scss';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Label type='title' text='I Putu Mahendra' secondText='Juniartha' />
        <Label type='heading' text='Welcome to my Portofolio' />
      </div>
    );
  }
}
