import Label from 'components/atoms/Label';
import React, { Component } from 'react';

// styles
import './index.scss';

export default class Experience extends Component {
  render() {
    return (
      <div className='experience'>
        <div className='experience-title'>
          <Label type='title' text='Experience' />
        </div>
        <div className='experience-content'>
          <div className='col'>
            <Label type='heading' text='Software Engineer' />
            <Label text='Apr 2022 - Present' />
          </div>
          <Label type='sub-heading' text='PT. GHI' />
          <Label text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum, magni magnam nemo voluptatibus excepturi id, omnis fugit aspernatur aut illo enim. Sapiente nisi, sit iusto aperiam omnis tempora vitae odio nihil perspiciatis itaque quasi dolore quia necessitatibus quas fuga a? Enim repellendus quisquam aliquam sed reprehenderit minus amet praesentium.' />
        </div>
        <div className='experience-content'>
          <div className='col'>
            <Label type='heading' text='Web Developer' />
            <Label text='Oct 2019 - Mar 2022' />
          </div>
          <Label type='sub-heading' text='PT. DEF' />
          <Label text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum, magni magnam nemo voluptatibus excepturi id, omnis fugit aspernatur aut illo enim. Sapiente nisi, sit iusto aperiam omnis tempora vitae odio nihil perspiciatis itaque quasi dolore quia necessitatibus quas fuga a? Enim repellendus quisquam aliquam sed reprehenderit minus amet praesentium.' />
        </div>
        <div className='experience-content'>
          <div className='col'>
            <Label type='heading' text='Junior Android Developer' />
            <Label text='Jan 2018 - Jul 2018' />
          </div>
          <Label type='sub-heading' text='PT. ABC' />
          <Label text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum, magni magnam nemo voluptatibus excepturi id, omnis fugit aspernatur aut illo enim. Sapiente nisi, sit iusto aperiam omnis tempora vitae odio nihil perspiciatis itaque quasi dolore quia necessitatibus quas fuga a? Enim repellendus quisquam aliquam sed reprehenderit minus amet praesentium.' />
        </div>
      </div>
    );
  }
}
