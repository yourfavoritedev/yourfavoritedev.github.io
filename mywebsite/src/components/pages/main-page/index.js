import React from 'react';
import HomeHeader from './HomeHeader';
import Resume from './Resume';
import Slider from '../../common/Slider';
import Section from '../../common/Section';
import './App.css';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Slider useMenuWidget>
          <HomeHeader />
          <Resume />
          <Section bgColor="blue">{'Work In Progress'}</Section>
          <Section bgColor="blue">{'Work In Progress'}</Section>
        </Slider>
      </div>
    );
  }
}

export default MainPage;
