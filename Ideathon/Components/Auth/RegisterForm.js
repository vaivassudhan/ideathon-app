import React,{useState , createRef,useEffect} from 'react';
import { 
    View, 
    ScrollView ,
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme ,RadioButton, Button,} from 'react-native-paper';
import { AuthContext } from '../context';


const RegisteForm = ({navigation}) => {
    const { signIn } = React.useContext(AuthContext);

    const [Name, setName]=useState('');
    const [Age , setAge]=useState('');
    const [Gender , setGender]=useState('');
    const [Address , setAddress]=useState('');
    const [City , setCity]=useState('');
    const [PhoneNumber , setPhoneNumber]=useState('');
    const [value, setValue] = React.useState('first');
    
    
    
    const [location, setlocation] = React.useState(null);
    const [geocode, setgeocode] = React.useState(null);
    const [errorMessage, seterrorMessage] = React.useState('');

    const [Locationn, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const Http = new XMLHttpRequest();
    function getLocation() {
        console.log("getLocation Called");
        var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client"

        navigator.geolocation.getCurrentPosition(
            (position) => {
                bdcApi = bdcApi
                    + "?latitude=" + position.coords.latitude
                    + "&longitude=" + position.coords.longitude
                    + "&localityLanguage=en";
                getApi(bdcApi);

            },
            (err) => { getApi(bdcApi); },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
    }
    function getApi(bdcApi) {
        Http.open("GET", bdcApi);
        Http.send();
        Http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.responseText
                setlocation(result)
                
            }
        };
    }

        useEffect(() => {
            getLocation();
          }, []);
    
    // getLocationAsync = async () => {
    //         let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //         if (status !== 'granted') {
    //             seterrorMessage('Permission to access location was denied')
    //         }
        
    //         let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
    //         const { latitude , longitude } = location.coords
    //         getGeocodeAsync({latitude, longitude})
    //         setlocation({ location: {latitude, longitude}});
    //       };

    //       getGeocodeAsync= async (location) => {
    //         let geocode = await Location.reverseGeocodeAsync(location)
    //         // this.setState({ geocode})
    //         setgeocode(geocode)
    //       }

    const [data, setData] = React.useState({
        Name:'',
        Age:'',
        Gender:'',
        Address:'',
        City:'',
        PhoneNumber:'',
        value: '',
        

        check_textNameChange: false,
        check_textAgeChange: false,
        check_textGenderChange: false,
        check_textAddressChange: false,
        check_textCityChange: false,
        check_textPhoneNumberChange: false,

        isValidUser: true,
        
    });
    const getCurrentDate=()=>{

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        return month + '/' + date + '/' + year;
  }
    
    function contin(){
        if(data.check_textNameChange || data.check_textAgeChange || data.check_textGenderChange || data.check_textPhoneNumberChange){
            var date = getCurrentDate();
            const date2 = new window.Date().getTime();
            let time = JSON.stringify(date2)
            var dem = {
                data:[]
                }
            const dic= {
                Name:Name,
                Age:Age,
                Gender:value,
                PhoneNumber:PhoneNumber,
                Date:date,
                Time:time,
                Symtoms:JSON.stringify(dem),
                Location:location
            }
            console.log(dic)
            signIn(dic);
            navigation.navigate('HomeScreen')
        }
        else{
            Alert.alert('Plese Check!', 'Please Fill Your Details Correctly', [
                {text: 'Okay'}
               ]);
        }
    }
    const { colors } = useTheme();

    const textNameChange = (Name) => {
        setName(Name)
        if( Name.trim().length >= 4 ) {
            setData({
                ...data,
                check_textNameChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                check_textNameChange: false,
                isValidUser: false
            });
        }
    }
    const textAgeChange = (Age) => {
        setAge(Age)
        if( Age.trim() >= 18) {
            setData({
                ...data,
                check_textAgeChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                check_textAgeChange: false,
                isValidUser: false
            });
        }
    }
    const textGenderChange = (Gender) => {
        setGender(Gender)
        if( Gender.trim()) {
            setData({
                ...data,
                check_textGenderChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                check_textGenderChange: false,
                isValidUser: false
            });
        }
    }
    const textAddressChange = (Address) => {
        setAddress(Address)
        if( Address.trim()) {
            setData({
                ...data,
                check_textAddressChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                check_textAddressChange: false,
                isValidUser: false
            });
        }
    }
    const textCityChange = (City) => {
        setCity(City)
        if( City.trim() ) {
            setData({
                ...data,
                check_textCityChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                check_textCityChange: false,
                isValidUser: false
            });
        }
    }
    const textPhoneNumberChange = (PhoneNumber) => {
        setPhoneNumber(PhoneNumber)
        if( PhoneNumber.trim() ) {
            setData({
                ...data,
                check_textPhoneNumberChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                check_textPhoneNumberChange: false,
                isValidUser: false
            });
        }
    }



    return (

      <View style={styles.container}>
           <ScrollView>
          <ImageBackground 
        source={require('../../assets/dem1.jpg')} 
        style={{width:undefined, padding:16, paddingTop:48, height:250}}
        >
          <StatusBar backgroundColor='rgb(54,118,203)' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        </ImageBackground>
       
            <Animatable.View 
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Name"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(Name) => textNameChange(Name)}
                />
                {data.check_textNameChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="red"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 35
                }]}>Age</Text>
            <View style={styles.action}>
            <View >
                <FontAwesome 
                    name="child"
                    color={colors.text}
                    size={20}
                />
            </View>
                <TextInput 
                    placeholder="Your Age"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(Age) => textAgeChange(Age)}
                />
                {data.check_textAgeChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="red"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 35
                }]}>Gender</Text>
            <View style={styles.action_radio}>
            <View style={{marginTop:7}}>
                <FontAwesome 
                    name="venus-mars"
                    color={colors.text}
                    size={20}
                />
            </View>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection:'row'}}>
                    <RadioButton value="Male" color='rgb(34,88,163)'/>
                    <Text style={{marginTop:10,marginRight:8}}>Male</Text>
                    <RadioButton value="Female" color='rgb(34,88,163)'/>
                    <Text style={{marginTop:10}}>Female</Text>       
                </View>
                </RadioButton.Group>
                {/* <TextInput 
                    placeholder="Your Gender"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(Gender) => textGenderChange(Gender)}
                /> */}
                {data.check_textGenderChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="red"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
{/* 
            <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 35
                }]}>Address</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="home"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Address"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(Address) => textAddressChange(Address)}
                />
                {data.check_textAddressChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="red"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 35
                }]}>City</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="home"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your City"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(City) => textCityChange(City)}
                />
                {data.check_textCityChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="red"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View> */}
            {/* <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 35
                }]}>PhoneNumber</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="mobile"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your PhoneNumber"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(PhoneNumber) => textPhoneNumberChange(PhoneNumber)}
                />
                {data.check_textPhoneNumberChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="red"
                        size={20}
                    />
                </Animatable.View>
                : null} 
            </View>*/}
            
           
            <View style={styles.button}>
            <TouchableOpacity
                    style={styles.signIn}
                    // onPress={() => {loginHandle( data.username, data.password )}}
                        onPress={() => contin()}
                >
                <LinearGradient
                    colors={['#007AFF', 'rgb(54,118,203)']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Continue</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animatable.View>
        </ScrollView>
      </View>
      
    );
};

export default RegisteForm;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    //   backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    action_radio: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
