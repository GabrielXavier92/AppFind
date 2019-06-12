
import React, { Component } from 'react';
import { Container, Platform, StyleSheet } from 'react-native';

import { StyleProvider, Root } from "native-base";
import getTheme from "../native-base-theme/components";
import material from "../native-base-theme/variables/material";

import Routes from "./routes"
import AppHeader from "./components/appHeader/appHeader";
import AppFooter from "./components/appFooter/appFooter";

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Root>
          <AppHeader />
          <Routes />
          <AppFooter />
        </Root>
      </StyleProvider>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
