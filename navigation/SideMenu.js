
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons'
import { connect } from "react-redux";


class SideMenu extends Component {

  state = {
    signed: false
  };

  componentDidMount() {
    console.log("11111111111111111111111111111111111111111111111" + this.props.loggedIn);
  }


  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  signedIn(){
    this.setState({signed:true});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.IconView}>
          <Image style={styles.TitlePic} source={require('../assets/images/main.png')} />
        </View>

        <View style={styles.ButtonContainer}>
          {this.props.loggedIn ? (
            <Text style={styles.gretting}>Hey Nazeer!</Text>

          ) : (
              <Text style={styles.gretting}>Hey You!</Text>
            )}

          <ScrollView showsVerticalScrollIndicator={false} style={{ marginLeft: 5 }}>
            <TouchableOpacity onPress={this.props.onLogin}>
              <View style={styles.RowView}>
                <Image style={styles.iconWomen} source={require('../assets/images/avatar.png')} />

                <Text style={styles.sectionHeadingStyle2}>
                  Create an account/Sign in
            </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.navigateToScreen('HomeScreen')}>
              <View style={styles.RowView}>
                <Image style={styles.iconWomen} source={require('../assets/images/shopping-bag.png')} />

                <Text style={styles.sectionHeadingStyle2}>
                  Shop
            </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.navigateToScreen('LinksScreen')}>
              <View style={styles.RowView}>
                <Image style={styles.icon} source={require('../assets/images/shopping.png')} />

                <Text style={styles.sectionHeadingStyle2}>
                  Purchase History
            </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.navigateToScreen('SettingsScreen')}>
              <View style={styles.RowView}>
              <Image style={styles.Cameraicon} source={require('../assets/images/photo-camera.png')} />
              
                {/* <Icon.AntDesign
                  name="camerao"
                  color="#fff"
                  size={20}
                /> */}
                <Text style={styles.sectionHeadingStyle2}>
                  Snap & Scan
            </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={this.navigateToScreen('Portal')}>
            <Text style={styles.footerText}>
              Help
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

const mapDispatchToProps = dispatch =>  {
  return {
    onLogin: () => dispatch({ type: "logged", loggedIn: true })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    marginBottom: 5
  },
  TitlePic: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 65
  },
  IconView: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  },

  icon: {
    height: 20,
    width: 20
  },
  Cameraicon:{
    height: 19,
    width: 19
  },
  iconWomen: {
    height: 20,
    width: 20
  },

  gretting: {
    fontSize: 21,
    color: '#b54c6a',
    marginBottom: 50,
  },
  ButtonContainer: {
    paddingLeft: 20,
  },
  RowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  sectionHeadingStyle2: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 15,
  },
  footerText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 13,
    padding: 10
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    marginLeft: 40,
    marginBottom: 60
  }

});