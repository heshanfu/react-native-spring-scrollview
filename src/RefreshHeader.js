/*
 *
 * Created by Stone
 * https://github.com/bolan9999
 * Email: shanshang130@gmail.com
 * Date: 2018/7/12
 *
 */

import React from "react";
import { ActivityIndicator, Animated, Image, Text, View } from "react-native";

export class RefreshHeader extends React.Component<HeaderPropType, StateType> {
  static defaultProps = {
    maxHeight: 80
  };

  constructor(props: HeaderPropType) {
    super(props);
    this.state = { status: "waiting" };
  }

  changeToState(newStatus: Status) {
    this.state.status !== newStatus &&
      this.onStateChange(this.state.status, newStatus);
  }

  onStateChange(oldStatus: Status, newStatus: Status) {
    console.log("newStatus", newStatus);
    this.setState({ status: newStatus });
  }

  render() {
    return (
      <Text>
        {this.state.status}
      </Text>
    );
  }
}

export type Status =
  | "waiting"
  | "pulling"
  | "pullingEnough"
  | "pullingCancel"
  | "releaseRebound"
  | "refreshing"
  | "cancelRefresh"
  | "rebound";

interface HeaderPropType {
  offset?: Animated.Value,
  maxHeight?:number
}

interface StateType {
  status?: Status
}