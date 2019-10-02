/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import background from './assets/background.png'

import RNStyledDialogs from "react-native-styled-dialogs"

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <ImageBackground
      source={background}
      style={[styles.container]}
      width={1000}
      height={1000}
    >
      <TouchableOpacity
        onPress={() => {
          RNStyledDialogs.Show({
            title: "Awesome!",
            titleColor: "",
            description:
              "Glad to you like RNStyledDialogs! If you are up for it, we would like to appreciate you receiving us.",
            descriptionColor: "",
            positiveText: "Go",
            // positiveTextColor: "#234333",
            // positiveBackgroundColor: "#000000",
            neutralText: "Close",
            neutralTextColor: "#556533",
            // neutralBackgroundColor: "#565677",
            negativeText: "Later",
            negativeTextColor: "#556533",
            // negativeBackgroundColor: "#565677",
            // headerBackgroundColor: "#000000",
            headerBackgroundImage: "headerbg.jpg",
            // headerTitle: "Awesome!",
            headerIcon: "headericon.png",
            headerIconAnimation: true,
            dialogAnimation: true,
            darkerOverlay: true,
            scrollable: true,
            maxLines: 5,
            cancelable: true,
            autoDismiss: false,
            input: true,
            placeholder: 'Please enter name',
            onPositive: (input) => {
              console.log("positive clicked, " + input);
            },
            onNeutral: () => {
              console.log("neutral clicked");
            },
            onNegative: () => {
              console.log("negative clicked");
            },
            onCancellable: () => {
              console.log("cancellable");
            }
          });
        }}
      >
        <Text>Alert</Text>
      </TouchableOpacity>
    </ImageBackground>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});