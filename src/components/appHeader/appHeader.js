import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Subtitle } from 'native-base';
export default class AppHeader extends Component {
   render() {
      return (
         <Header>
            <Left />
            <Body>
               <Title>Title</Title>
               <Subtitle>Subtitle</Subtitle>
            </Body>
            <Right />
         </Header>
      );
   }
}