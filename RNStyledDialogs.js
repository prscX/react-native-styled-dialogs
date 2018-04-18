import React, { Component } from "react";
import { findNodeHandle, ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";

const { RNStyledDialogs } = NativeModules;

class StyledDialogs extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.string,

    description: PropTypes.string,
    descriptionColor: PropTypes.string,

    positiveText: PropTypes.string,
    positiveTextColor: PropTypes.string,
    positiveBackgroundColor: PropTypes.string,

    neutralText: PropTypes.string,
    neutralTextColor: PropTypes.string,
    neutralBackgroundColor: PropTypes.string,

    negativeText: PropTypes.string,
    negativeTextColor: PropTypes.string,
    negativeBackgroundColor: PropTypes.string,

    headerBackgroundColor: PropTypes.string,
    headerBackgroundImage: PropTypes.string,
    headerTitle: PropTypes.string,
    headerIcon: PropTypes.string,

    dialogAnimation: PropTypes.bool,
    darkerOverlay: PropTypes.bool
  };

  static defaultProps = {
    title: "",
    titleColor: "",

    description: "",
    descriptionColor: "",

    positiveText: "",
    positiveTextColor: "",
    positiveBackgroundColor: "#FFFFFF",

    neutralText: "",
    neutralTextColor: "",
    neutralBackgroundColor: "#FFFFFF",

    negativeText: "",
    negativeTextColor: "",
    negativeBackgroundColor: "#FFFFFF",

    headerBackgroundColor: "#FFFFFF",
    headerBackgroundImage: "",

    headerTitle: "",
    headerIcon: "",

    dialogAnimation: true,
    darkerOverlay: false
  };

  static Show(props) {
    if (props.title === undefined) {
      props.title = StyledDialogs.defaultProps.title;
    }
    if (props.titleColor === undefined) {
      props.titleColor = StyledDialogs.defaultProps.titleColor;
    }

    if (props.description === undefined) {
      props.description = StyledDialogs.defaultProps.description;
    }
    if (props.descriptionColor === undefined) {
      props.descriptionColor = StyledDialogs.defaultProps.descriptionColor;
    }

    if (props.positiveText === undefined) {
      props.positiveText = StyledDialogs.defaultProps.positiveText;
    }
    if (props.positiveTextColor === undefined) {
      props.positiveTextColor = StyledDialogs.defaultProps.positiveTextColor;
    }
    if (props.positiveBackgroundColor === undefined) {
      props.positiveBackgroundColor =
        StyledDialogs.defaultProps.positiveBackgroundColor;
    }

    if (props.neutralText === undefined) {
      props.neutralText = StyledDialogs.defaultProps.neutralText;
    }
    if (props.neutralTextColor === undefined) {
      props.neutralTextColor = StyledDialogs.defaultProps.neutralTextColor;
    }
    if (props.neutralBackgroundColor === undefined) {
      props.neutralBackgroundColor = StyledDialogs.defaultProps.neutralBackgroundColor;
    }

    if (props.negativeText === undefined) {
      props.negativeText = StyledDialogs.defaultProps.negativeText;
    }
    if (props.negativeTextColor === undefined) {
      props.negativeTextColor = StyledDialogs.defaultProps.negativeTextColor;
    }
    if (props.negativeBackgroundColor === undefined) {
      props.negativeBackgroundColor =
        StyledDialogs.defaultProps.negativeBackgroundColor;
    }

    if (props.headerBackgroundColor === undefined) {
      props.headerBackgroundColor =
        StyledDialogs.defaultProps.headerBackgroundColor;
    }
    if (props.headerBackgroundImage === undefined) {
      props.headerBackgroundImage =
        StyledDialogs.defaultProps.headerBackgroundImage;
    }

    if (props.headerTitle === undefined) {
      props.headerTitle = StyledDialogs.defaultProps.headerTitle;
    }
    if (props.headerIcon === undefined) {
      props.headerIcon = StyledDialogs.defaultProps.headerIcon;
    }

    if (props.dialogAnimation === undefined) {
      props.dialogAnimation = StyledDialogs.defaultProps.dialogAnimation
    }
    if (props.darkerOverlay === undefined) {
      props.darkerOverlay = StyledDialogs.defaultProps.darkerOverlay
    }

    RNStyledDialogs.Show(props);
  }
}

export default StyledDialogs;