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
    headerIconAnimation: PropTypes.bool,

    dialogAnimation: PropTypes.bool,
    darkerOverlay: PropTypes.bool,
    scrollable: PropTypes.bool,
    maxLines: PropTypes.number,
    cancelable: PropTypes.bool,
    autoDismiss: PropTypes.bool,

    onPositive: PropTypes.func,
    onNeutral: PropTypes.func,
    onNegative: PropTypes.func,
    onCancellation: PropTypes.func,

    input: PropTypes.bool,
    placeholder: PropTypes.string
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
    headerIconAnimation: true,

    dialogAnimation: true,
    darkerOverlay: false,

    scrollable: false,
    maxLines: 5,

    cancelable: true,
    autoDismiss: false,

    input: false,
    placeholder: ''
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
      props.neutralBackgroundColor =
        StyledDialogs.defaultProps.neutralBackgroundColor;
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
    if (props.headerIconAnimation === undefined) {
      props.headerIconAnimation =
        StyledDialogs.defaultProps.headerIconAnimation;
    }

    if (props.dialogAnimation === undefined) {
      props.dialogAnimation = StyledDialogs.defaultProps.dialogAnimation;
    }
    if (props.darkerOverlay === undefined) {
      props.darkerOverlay = StyledDialogs.defaultProps.darkerOverlay;
    }

    if (props.scrollable === undefined) {
      props.scrollable = StyledDialogs.defaultProps.scrollable
    }
    if (props.maxLines === undefined) {
      props.maxLines = StyledDialogs.defaultProps.maxLines
    }


    if (props.cancelable === undefined) {
      props.cancelable = StyledDialogs.defaultProps.cancelable;
    }
    if (props.autoDismiss === undefined) {
      props.autoDismiss = StyledDialogs.defaultProps.autoDismiss
    }

    if (props.input === undefined) {
      props.input = StyledDialogs.defaultProps.input;
    }
    if (props.placeholder === undefined) {
      props.placeholder = StyledDialogs.defaultProps.placeholder;
    }

    RNStyledDialogs.Show(
      props,
      (selection, input) => {
        let { onPositive, onNeutral, onNegative } = props;

        if (selection === "positive") {
          onPositive && onPositive(input);
        } else if (selection === "neutral") {
          onNeutral && onNeutral();
        } else if (selection === "negative") {
          onNegative && onNegative();
        }
      },
      () => {
        let { onCancellable } = props;
        onCancellable && onCancellable();
      }
    );
  }
}

export default StyledDialogs;