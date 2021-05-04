import React,{useState , createRef,useEffect ,Component} from 'react';
import { 
    SafeAreaView,
    View, 
    ScrollView ,
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image,
    ImageBackground
} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { useTheme } from 'react-native-paper';

const slides = [
    {
      key: 'one',
      title: 'Welcome to CoviCare',
      text: 'Your Home Quarantine Assistant',
      image: require('../../assets/415.jpg'),
      backgroundColor: 'rgb(255, 255, 255)',
      backgroundColor1: 'rgb(255,255,255)',
      
    },
    {
      key: 'two',
      title: 'Symptoms ',
      text: 'Remedies for your symptoms at one place',
      image: require('../../assets/report.jpg'),
      backgroundColor: 'rgb(250, 250, 250)',
      backgroundColor1: 'rgb(250,250,250)',
    },
    {
      key: 'three',
      title: 'Report',
      text: 'Monitor your report anytime',
      image: require('../../assets/history.jpg'),
      backgroundColor: 'rgb(255, 255, 255)',
      backgroundColor1: 'rgb(255,255,255)',
    }
  ];

export class Slide extends Component {
  constructor(props){
    super(props);
    this.state = {
      showRealApp: false
    }
  }
  _renderItem = ({ item }) => {
    return (
      <LinearGradient colors={[
        item.backgroundColor,
        item.backgroundColor1,
      ]} style={[
        styles.slide,]}>

      <SafeAreaView style={[
        styles.slide,]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </SafeAreaView>
      </LinearGradient>
    );
  }


  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="md-arrow-forward-sharp"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    this.props.navigation.navigate('Register')
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} renderDoneButton={this._renderDoneButton}
      renderNextButton={this._renderNextButton}/>;
    }
  }
}

export default Slide

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  image: {
    width: 390,
    height: 300,
    // marginVertical: 32,
  },
  text: {
    color: 'rgba(34,88,163, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'rgb(34,88,163)',
    textAlign: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 