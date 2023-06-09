import React, { useEffect } from 'react';
import {View,
        StyleSheet, 
        ImageBackground,Linking,Alert,PermissionsAndroid,Platform
} from 'react-native';
import { ColorPalet } from '../../Header/Header';
import AsyncStorage from '@react-native-community/async-storage';
import { LoginData } from '../../Redux/LoginData';
import Geolocation from 'react-native-geolocation-service';
import { LocationData } from '../../Redux/LocationData';
import Toast from 'react-native-simple-toast';
import { APIMaster } from '../../API/APIMaster';
import axios from 'axios';
import BlogContext from './../../BlogContext';
import {updateLocationState, updateStates} from './../../Redux/Functions'



const Splash = (props) => {

  const { userData,setUserData,CurrentData,setCurrentData,
    MoveLocationsData, setMoveLocationsData,DefaultLocationData,setDefaultLocationData,
    MoveData,setMoveData,
    EditMoveData,setEditMoveData,
    CurrentMove,setCurrentMove,
    PDData,setPDData,
    VDData,setVDData } = React.useContext(BlogContext);


  let hasLocationPermission = async () => {

    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      Toast.show(
        'Location permission denied by user.',
        Toast.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      Toast.show(
        'Location permission revoked by user.',
        Toast.LONG,
      );
    }

    return false;
  };

  let checkLocationPermission =()=> {

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {

          // LocationData.current_latitude = position.coords.latitude;

          // LocationData.current_longitude = position.coords.longitude;
      
          // LocationData.current_accuracy = position.coords.accuracy;

          updateLocationState(CurrentData,setCurrentData,position.coords.latitude,position.coords.longitude,position.coords.accuracy)



          console.log('Lat: ', CurrentData[0].current_latitude, '  Long: ', CurrentData[0].current_longitude);
      
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }


  

  let getUserData = async()=> {
    
    let User_Id =  await AsyncStorage.getItem("user_id")
    let Username =  await AsyncStorage.getItem("username")
    let Role = await AsyncStorage.getItem("role")
   let InlineStatus = await AsyncStorage.getItem("InlineStatus")
    // console.log('User Id is : ', userData[0].user_id)

   if(InlineStatus != null && InlineStatus !='')
   {
    LoginData.InlineStatus = InlineStatus
   }
  

    if(User_Id != '' && User_Id != null) {

       console.log('test async')
       updateStates(userData,setUserData,User_Id.toString(),Username.toString(),null,null,null,null,null,Role.toString())
    
      

      //  GetProfessionalDetails()
       if(User_Id != null && User_Id != '') 
       {  
        props.navigation.replace('Home')
        //  CheckUserActive(User_Id,null,null)
       }
       else 
       {
           props.navigation.replace('SignUpIn')
       }

    }
    else 
       {
           props.navigation.replace('SignUpIn')
       }
  }

  let CallNextScreen = ()=> { 
     console.log('LoginData.user_id',userData[0].user_id)
    if(userData[0].user_id != null && userData[0].user_id != '') 
    {  
      
      CheckUserActive(userData[0].username,null,null)
    }
    else 
    {
        props.navigation.replace('SignUpIn')
    }

  }


  
  let CheckUserActive=(_user_id,_activeCode,_sendagain)=>{

    var axiosConfig = {
      headers: {
        Content_Type : 'application/json'
      }
    }
    var params = {};
    if(_activeCode == null && _sendagain == null)
    {
      params = {
        username: _user_id
      }
    }
    else if(_activeCode == null && _sendagain != null)
    {
      params = {
        username: _user_id,
        send_again:_sendagain
      }
    }
    else if(_activeCode != null )
    {
      params = {
        username: _user_id,
        activation_code:_activeCode
      }
    }
    console.log('params',params)

    axios.post(APIMaster.URL + APIMaster.User.activation,params, axiosConfig)
    .then((response)=> {
      // console.log('response.data : ',response.data.message,response.data.status)
    //  Toast.show(response.data.message)
      if(response.data.status == 1)
      {
        if(response.data.message == 'User Is Active')
        {  
        GetProfessionalDetails()
        }
        else
        {
          props.navigation.replace('SignUp')
          props.navigation.navigate('ActiveAccount')
        }
      }
      else if(response.data.message == 'User is not exist')
      {
        Toast.show(response.data.message)
        props.navigation.replace('SignUpIn')
        
      }
      else
      {
        props.navigation.replace('SignUp')
        props.navigation.navigate('ActiveAccount')
      }

    })
    .catch( (error)=> {
     console.log('Error : ',error)  
     //props.navigation.navigate('ActiveAccount')
   })
  }

  let GetProfessionalDetails = async()=> {

    var axiosConfig = {

      headers: {
        Accept : 'application/json',
        Content_Type : 'application/json'
      }
    }
   
    axios.get(APIMaster.URL + APIMaster.ProfessionalDetail.GetProfessionalDetail + userData[0].user_id, axiosConfig)
    .then((response)=> {

      // Toast.show(response.data.message)
        // LoginData.status = response.data.status;
        updateStates(userData,setUserData,null,null,null,null,null,null,null,null,response.data.status)
      if(response.data.status == 0 && userData[0].role == 'provider') {

        if(userData[0].InlineStatus == 0)
        props.navigation.replace('ProfessionalDetails')
        else
        {
        props.navigation.replace('Home')
        
        // LoginData.InlineStatus=-1;
        updateStates(userData,setUserData,null,null,null,null,null,null,null,null,null,-1)
        }
        }
      else {
        props.navigation.replace('Home')

      }
    })
    .catch( (error)=> {
     console.log('Error : ',error)  
   
   })
  }








  useEffect(()=> {
   

 
    

    console.log('*-*-*-*-*-*-*-*-*-*-*\n*-   App Started   -*\n*-*-*-*-*-*-*-*-*-*-*')

    checkLocationPermission()

    getUserData()

    // setTimeout(() => {

    //   CallNextScreen()

    // }, 1000);

 
    

  },[]);


  handleOpenURL=async(event)=>{
    console.log('test details1 event url 3 : ', event)
    {
    if(event.split('/')[2] == "paypal.com")
    {
      var UserId = await AsyncStorage.getItem('PaymentUserId')
      var MoveId = await AsyncStorage.getItem('PaymentMoveId')
      var Price = await AsyncStorage.getItem('PaymentPrice')
      console.log('success back to app')
      PaymentsComplete(MoveId,UserId,Price);
    }
    else  
    if(event.split('/')[2] == "paypalerror.com")
    {
      var UserId = await AsyncStorage.getItem('PaymentUserId')
      var MoveId = await AsyncStorage.getItem('PaymentMoveId')
      var Price = await AsyncStorage.getItem('PaymentPrice')
      console.log('Error back to app :',UserId,MoveId,Price)
      Alert.alert('Alert','Your Payment Is Not Complete.')
      AsyncStorage.removeItem('PaymentUserId')
      AsyncStorage.removeItem('PaymentMoveId')
      AsyncStorage.removeItem('PaymentPrice')
    }
  }
  }

  let PaymentsComplete=(move_id,UserId,amount)=>{
    var params = {
      user_id: UserId,
      move_id: move_id,
    "transaction_id": move_id,
    "payment_type":"paypal",
    "transaction_type":"payment",
    "status": "completed",
    "amount": amount,
    "logs": move_id
  }

  var axiosConfig = {
    headers:{
      Accept : 'application/json',
      Content_Type : 'application/json'
    }
   }
  
  
  axios.post(APIMaster.URL + APIMaster.PaymentCard.CompletePayment, params, axiosConfig)
  .then((response)=> {
          
          console.log(response.data.message)  
          AsyncStorage.removeItem('PaymentUserId')
          AsyncStorage.removeItem('PaymentMoveId')
          AsyncStorage.removeItem('PaymentPrice')
        Alert.alert('Alert',response.data.message)
  })
  .catch( (error)=> {
    console.log('Error PaymentComplete : ',error.response.data)  
   
  })
   }

  return (

    <View style={styles.Container}>

      <ImageBackground source={require("./../../Image/splash.png")} 
                       resizeMode="stretch" 
                       style={styles.backgroundImage}>

      </ImageBackground>
      
    </View>  
   
   );
};

const styles = StyleSheet.create({
  
  Container : {
      flex : 1,
      backgroundColor: ColorPalet.SignUpBackground
    },

    backgroundImage: {
      flex : 1,
      justifyContent : "center",
      opacity : 80
    }

});

export default Splash;