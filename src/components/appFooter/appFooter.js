import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class AppFooter extends Component {
   render() {
      return (
         <Footer>
            <FooterTab>
               <Button vertical>
                  <Icon active name="apps" />
                  <Text>Apps</Text>
               </Button>
               <Button vertical>
                  <Icon name="camera" />
                  <Text>Camera</Text>
               </Button>
               <Button vertical active>
                  <Icon name="navigate" />
                  <Text>Navigate</Text>
               </Button>
               <Button vertical>
                  <Icon name="person" />
                  <Text>Contact</Text>
               </Button>
            </FooterTab>
         </Footer>
      );
   }
}