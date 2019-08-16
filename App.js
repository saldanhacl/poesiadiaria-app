import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { Text, View, StyleSheet, ActivityIndicatorComponent, Image } from 'react-native'
import Poetry from './src/pages/Poetry';
import Swiper from 'react-native-swiper'
import LottieView from 'lottie-react-native';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.colRef = firebase.firestore().collection('poesia');
    this.state = {
      data: null,
      visible: false
    }
  }

  componentDidMount() {
    this.colRef.get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      this.setState({
        data: data
      })
    });
    setTimeout(() => {
      this.setState({
        visible: true
      })
    }, 1500);
  }

  _renderContent = () => {
    if (!!this.state.data && this.state.visible) {
      return (
        <Swiper showsButtons={false} showsPagination={false} loop={false} index={this.state.data.length - 1}>
          {
            this.state.data.map(data => {
              return (
                <Poetry data={data} />
              )
            })
          }
        </Swiper>
      )
    } else {
      return <View style={styles.wrapper}>
        <LottieView style={styles.center} source={require('./src/assets/animations/loading.json')} autoPlay loop />
      </View>

      // return
      // return <ActivityIndicator styles={styles.center} />
    }
  }

  render() {
    return this._renderContent();
  }
}



const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    height: 150,
    width: 150
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
