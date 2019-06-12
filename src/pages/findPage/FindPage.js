import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Text, Button } from 'native-base';

import { Actions } from 'react-native-router-flux';

class FindPage extends Component {

   render() {

      return (
         <Content>
            <Text style={styles.welcome}>Find Page</Text>
            <Button style={styles.goTo} onPress={() => { Actions.addProduct() }}><Text>Go to Add Product</Text></Button>
         </Content>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
   goTo: {
      fontSize: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      margin: 10,
   },
   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
   },
});

export default Home;