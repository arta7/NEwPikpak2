import React, 
       { useState, 
         useRef ,useEffect
} from 'react';
import {View,
        Text,
        Image, 
        StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { widthPercentageToDP as wp, 
         heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { ColorPalet } from '../../Header/Header';
import TextBox from '../../Components/TextBox';
import Button from '../../Components/Button';
import Headers from '../../Components/Headers';
import axios from 'axios';
import { APIMaster } from '../../API/APIMaster';
import { LoginData } from '../../Redux/LoginData';
import Modal from 'react-native-modal';
import Loading_Data from '../../Components/LoadingData';
import Toast from 'react-native-simple-toast';
import BlogContext from './../../BlogContext';
// import {LatContext} from './../../BlogContext';

import {updateStates,updateLocationState} from './../../Redux/Functions'

// import RNRestart from 'react-native-restart';
// import App from './../../App'

const Login = (props)=> {

  const _username = useRef(null)
  const _password = useRef(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [Loader_Visible, setLoader_Visible] = useState(false)
  const[IsSecures,setIsSecure] = useState(true)

  const { userData,setUserData,CurrentData,setCurrentData,
    MoveLocationsData, setMoveLocationsData,DefaultLocationData,setDefaultLocationData,
    MoveData,setMoveData,
    EditMoveData,setEditMoveData,
    CurrentMove,setCurrentMove,
    PDData,setPDData,
    VDData,setVDData } = React.useContext(BlogContext);
  
  // const {CurrentData,setCurrentData } = React.useContext(LatContext);


 



  // const updateState = (itemuserid,itemusername,itempassword,itemtype,itemfacebookid,itemgoogleid,itememail,itemrole,itemstatus,itemInlineStatus,itembadgeCount,itemCurrentPage) => {

  //   console.log('test1',userData)
  //   var newState = userData.map((item, idx) => {
  //       return {
  //         ...item,
  //         user_id: itemuserid 
  //         != null ? itemuserid : item.user_id ,
  //       username: itemusername != null ? itemusername : item.username,
  //       password: itempassword != null ? itempassword : item.password,
  //       type: itemtype != null ? itemtype : item.type,
  //       facebook_id: itemfacebookid != null ? itemfacebookid : item.facebook_id,
  //       google_id: itemgoogleid != null ? itemgoogleid : item.google_id,
  //       email: itememail != null ? itememail : item.email,
  //       role: itemrole != null ? itemrole : item.role,
  //       status:itemstatus != null ? itemstatus : item.status,
  //       InlineStatus:itemInlineStatus != null ? itemInlineStatus : item.InlineStatus,
  //       badgeCount:itembadgeCount != null ? itembadgeCount : item.badgeCount,
  //       CurrentPage:itemCurrentPage != null ? itemCurrentPage : item.CurrentPage
  //       }
  //     }
  //   )
  //   console.log('test2',newState)
  //   setUserData(newState)
  // }

  let updaetDataes=async()=>{

       updateStates(userData,setUserData,1)

      updateLocationState(CurrentData,setCurrentData,null,2)
    // UserLogin(username, password, 'default')
    //  var y = await updateLocationState(userData,setUserData,1)


   }
   



  let GetUserStatus = async()=> {
    
    var axiosConfig = {
      headers:{
        Accept : 'application/json',
        Content_Type : 'application/json'
      }
    }

    axios.get(APIMaster.URL + APIMaster.User.GetUserStatus, axiosConfig)
    .then((response)=> {
           
      console.log('************\n', response, '************\n') 

      if(response.data.Status == 1) {
        props.navigation.replace('Home')

        setLoader_Visible(false)
      }
      else {

        UserLogout()

      }
    })
   .catch( (error)=> {
     console.log('Error : ',error)
   })
  }

  let UserLogout = async()=> {

    var params = {

      user_id: _user_id

    }

    axios.post(APIMaster.URL + APIMaster.Auth.Logout, params)
    .then((response)=> {
            
      console.log('************\n', response, '************\n')  
            
      userData[0].user_id = '';
      userData[0].username = '';
      userData[0].role = '';
      console.log('**-------***')

      if(response.data.status == 1) {

        AsyncStorage.setItem("user_id", '')
        AsyncStorage.setItem("username", '')
        AsyncStorage.setItem("role", '')
        AsyncStorage.removeItem("InlineStatus")
        console.log('Logout Successfully...')

        props.navigator.replace('Login')
        
        setLoader_Visible(false)
      }
    })
    .catch( (error)=> {
      console.log('Error : ',error)
    })
  }


  useEffect(() => {
   
  }, [])

  let changestate=async()=>{LoginData.username 
    var x = await setLoader_Visible(false)
    var x1 = await  AsyncStorage.setItem("user_id",userData[0].user_id)
    var y = await  AsyncStorage.setItem("username",userData[0].username)
     var z = await AsyncStorage.setItem("role",userData[0].role)
  }

  let UserLogin = async(_username, _password, _type)=> {
    // LoginData.username = _username; 
   

    let InlineStatus = await AsyncStorage.getItem("InlineStatus")
   // BlurControls()
   if(InlineStatus != null && InlineStatus != '')
   {
    //  LoginData.InlineStatus = InlineStatus
    updateStates(userData,setUserData,null,null,null,null,null,null,null,null,null,InlineStatus)

   }
  
    //  updateStates(userData,setUserData,null,_username)
   setLoader_Visible(true)
    
    var params = {
      username: _username,
      password: _password,
      type: _type
    }

    axios.post(APIMaster.URL + APIMaster.Auth.Login, params)
    .then((response)=> {
     
      console.log('response.data.status',response.data.status)  
            
      if(response.data.status == 1) {
       
       
        // LoginData.user_id = response.data.data._id;
        //response.data.data.username;
          // LoginData.role = response.data.data.role;

          updateStates(userData,setUserData,response.data.data._id,_username,null,null,null,null,null,response.data.data.role)

        if(response.data.data) {

          AsyncStorage.setItem("user_id",response.data.data._id)
           AsyncStorage.setItem("username",_username)
           AsyncStorage.setItem("role",response.data.data.role)
        }
       
        setLoader_Visible(false)
        Toast.show(response.data.message)
        CheckUserActive(_username,null,null)
      }

      else if(response.data.message != 'Invalid username or password' && response.data.status == 0 )
      {
        CheckUserActive(_username,null,null)
      }
      // else
      // {

      // }
      setLoader_Visible(false)
       Toast.show(response.data.message)
     
      
    })
    .catch( (error)=> {
      setLoader_Visible(false)
      console.log('Error : ',error)  
      
    
    })
  }


  let CheckUserActive=(_user_id,_activeCode,_sendagain)=>{

    console.log('_user_id for activation',_user_id)
    var axiosConfig = {

      headers: {
        Accept : 'application/json',
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
    

    axios.post(APIMaster.URL + APIMaster.User.activation,params,axiosConfig)
    .then((response)=> {
      console.log('check _user_id for activation',_user_id)
      // Toast.show(response.data.status)
      if(response.data.status == 1)
      {
        if(response.data.message == 'User Is Active' || response.data.message == 'User Is Active now')
      {  
        GetProfessionalDetails()
      }
       else 
        props.navigation.navigate('ActiveAccount')

      }
      else
      {

        props.navigation.navigate('ActiveAccount')
      }

    })
    .catch( (error)=> {
     console.log('Error : ',error)  
     props.navigation.navigate('ActiveAccount')
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

      Toast.show(response.data.message)
      // LoginData.status = response.data.status;
      updateStates(userData,setUserData,null,null,null,null,null,null,null,null,response.data.status)
      if(response.data.status == 0 && (userData[0].role == 'provider') ) {
        if(userData[0].InlineStatus == 0)
        props.navigation.replace('ProfessionalDetails')
        else
        {
          // LoginData.InlineStatus = -1;
          updateStates(userData,setUserData,null,null,null,null,null,null,null,null,null,-1)
        props.navigation.replace('Home')
        }
        }
      else
      {
        // LoginData.InlineStatus = -1;
        updateStates(userData,setUserData,null,null,null,null,null,null,null,null,null,-1)
        props.navigation.replace('Home')
      }
    })
    .catch( (error)=> {
     console.log('Error : ',error)  
   
   })
  }

  let BlurControls =()=> {

    _username.current.blur()
    _password.current.blur()

  }

  return (

    <View style={styles.Container}>
      
      <Headers HeaderHeight = {hp('6.5%')} HeaderTitle = {'Login'} 
               LeftIconVisible = {true} RightIconVisible = {false}
               LeftIconName = {'angle-left'} LeftIconColor = {'#FFF'}
               LeftIconType = {'font-awesome'} LeftIconSize = {wp('6%')}
               LeftIconFunction = {()=>{props.navigation.goBack()}}
               RightIconName = {'angle-right'} RightIconColor = {'#FFF'} 
               RightIconType = {'font-awesome'} RightIconSize = {wp('6%')} />

      <View style = {{width: wp('100%'), height: hp('25%'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>

        <Image source = { require("./../../Image/logo.png") } resizeMode = 'center' style={ styles.logoImage }/>

      </View>

      <View style = {{width: wp('100%'), height: hp('15%'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
        
        <View style = {{width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
          
          <TextBox Title = {'username / email'} Value = {username} 
                setValue = {setUsername} notEmpty = {username.length == 0 ? false : true}
                MarginTop = {hp('0%')} IsSecure = {false}
                ControlName = {_username} />
        </View>

        <View style = {{width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
          
          <TextBox Title = {'password'} Value = {password} 
                setValue = {setPassword} notEmpty = {password.length == 0 ? false : true}
                MarginTop = {hp('0%')} IsSecure = {IsSecures}
                ControlName = {_password} 
                showIcon={true}
                ChangeSecure={()=>{setIsSecure(!IsSecures)}}
                
                />

        </View>
        
      </View>

      <View style = {{width: '100%', height: hp('7%'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginTop: hp('2%')}}>
        
        <Button b_Width = {'90%'} b_Height = {'100%'} b_BackgroundColor = {ColorPalet.LoginButton}
                b_BorderRadius = {15} b_Elevation = {3}
                t_FontSize = {20} t_FontWeight = {'bold'} 
                t_ButtonTitle = {'LOGIN'} t_Elevation = {3} 
                t_TextColor = {'white'} HasIcon = {false}
                Function = {()=>{
                  // updateStates(userData,setUserData,1)
                 UserLogin(username, password, 'default')
              //  updateLocationState(userData,setUserData,1)

             // updaetDataes()
                  }}/>

      </View>

      <View style = {{width: '100%', height: hp('5%'), justifyContent: 'center', alignItems: 'center'}}>
        
        <Button b_Width = {'50%'} b_Height = {'70%'} b_BackgroundColor = {'transparent'}
                b_BorderRadius = {15} b_Elevation = {0}
                t_FontSize = {wp('3.5%')} t_FontWeight = {'bold'} 
                t_ButtonTitle = {'Forgat Password?'} t_Elevation = {3} 
                t_TextColor = {'#FC9824'} HasIcon = {false}
                Function = {()=>{
                 
                  props.navigation.push('ForgotPassword')
                }
                }
                  />

      </View>

      <View style = {{width: '100%', height: hp('7%'), justifyContent: 'center', alignItems: 'center'}}></View>

      <View style = {{width: '100%', height: hp('5%'), justifyContent: 'center', alignItems: 'center'}}>
        
        {/* <Text style = {styles._Text}>Or Log in with</Text> */}

      </View>

      <View style = {{width: wp('100%'), height: hp('7%'), flexDirection: 'row'}}>

        <View style = {{width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
          
          {/* <Button b_Width = {'80%'} b_Height = {'100%'} b_BackgroundColor = {ColorPalet.FacebookColor}
                  b_BorderRadius = {10} b_Elevation = {3}
                  t_FontSize = {wp('3.5%')} t_FontWeight = {'bold'} 
                  t_ButtonTitle = {'Facebook'} t_Elevation = {3} 
                  t_TextColor = {'white'} HasIcon = {true}
                  IconName = {'facebook-f'} IconType = {'font-awesome'} 
                  IconSize = {30} IconColor = {'white'}
                  Function = {() => GetStateList()}/> */}

        </View>

        <View style = {{width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
          
          {/* <Button b_Width = {'80%'} b_Height = {'100%'} b_BackgroundColor = {ColorPalet.GoogleColor}
                  b_BorderRadius = {10} b_Elevation = {3}
                  t_FontSize = {wp('3.5%')} t_FontWeight = {'bold'} 
                  t_ButtonTitle = {'Google'} t_Elevation = {3} 
                  t_TextColor = {'white'} HasIcon = {true}
                  IconName = {'google-plus'} IconType = {'font-awesome'} 
                  IconSize = {30} IconColor = {'white'}
                  Function = {() => GetUserStatus()}/> */}


        </View>

      </View>

      <Modal style={{  marginHorizontal: wp('15%')}}
             isVisible={Loader_Visible}>

        <Loading_Data />

      </Modal>

    </View>  
   
  );
};

const styles = StyleSheet.create({
  
  Container : {
    flex : 1,
    backgroundColor: ColorPalet.MainBackground
  },

  logoImage: {
    width : wp('40%'),
    height : hp('10%'),
    justifyContent : "center",
    opacity : 80
  },

  _Text : {
    fontSize : wp('3.5%'), 
    fontWeight: 'bold', 
    color: '#000',
    elevation: 5
  }
});
 
export default Login;