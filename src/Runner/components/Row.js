import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Row extends Component {
  render() {
    let { children, object: { layout } } = this.props

    return (
      <View style={[styles.wrapper, layout]}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flex: 1
  }
})