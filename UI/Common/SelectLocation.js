import React, { useEffect,
  useRef } from 'react';
import {View,
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground
} from 'react-native';
import { widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import {ColorPalet} from '../../Header/Header';
import Headers from '../../Components/Headers';
import { Icon, Input } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GoogleMaps } from '../../Redux/GoogleMapsData';
import { MoveLocationsData, 
  DefaultLocationData 
} from '../../Redux/LocationData';
import axios from 'axios';
import { APIMaster } from '../../API/APIMaster';
import { MoveData } from '../../Redux/MoveData';


import BlogContext from './../../BlogContext';
import {updateStates,updateLocationState,updateMoveLocationState, updateDefaultLocationState, updateMoveState} from './../../Redux/Functions'

const SelectLocation = (props) => {


  const { userData,setUserData,CurrentData,setCurrentData,
    MoveLocationsData, setMoveLocationsData,DefaultLocationData,setDefaultLocationData,
    MoveData,setMoveData,
    EditMoveData,setEditMoveData,
    CurrentMove,setCurrentMove,
    PDData,setPDData,
    VDData,setVDData } = React.useContext(BlogContext);



const call_id = props.navigation.state.params.call_id
const screen_title = props.navigation.state.params.screen_title
const last_location = props.navigation.state.params.last_location

const SearchBar = useRef(null)

let UpdateControl1=async(data,details)=>{
  console.log('call id = ',call_id)
              
                
}


let UpdateControl=async(result,place_id)=>{
  

}
  
let GetPlaceLatLng = async(data,place_id)=>{
    
  var axiosConfig = {
    headers:{
      Accept : 'application/json',
      Content_Type : 'application/json'
    }
   }
  axios.get(APIMaster.GURL + 
            APIMaster.GooglePlace.GetLatLng.replace('{placeid}', place_id).replace('{key}', GoogleMaps.map_api_key),
            {
              headers: {
                'X-Android-Package': 'com.pikpak',
          'X-Android-Cert': GoogleMaps.fingerPrint
              }
            }
            )
    .then((result)=> {
      if(result.data.status == 'OK')
      {
        if(call_id == 'src')
  {
     updateMoveLocationState(MoveLocationsData,setMoveLocationsData,null,null,null,data.description,
      result.data.result.geometry.location.lat,result.data.result.geometry.location.lng)

  }
  else
  {

    updateMoveLocationState(MoveLocationsData,setMoveLocationsData, data.description,
      result.data.result.geometry.location.lat,result.data.result.geometry.location.lng)

    updateMoveState(MoveData,setMoveData,null,null,null,null,null,null,null,null,null,null
      ,null,null,null,null,null,null,null,null,null,null,null,place_id)

  }

   updateDefaultLocationState(DefaultLocationData,setDefaultLocationData,
     result.data.result.geometry.location.lat ,result.data.result.geometry.location.lng)
  props.navigation.replace('CreateMove_Location', {
    move_id: props.navigation.state.params.move_id != null ? props.navigation.state.params.move_id:''
   
  })
        // UpdateControl(result,place_id)
      }
      else
      {
        console.log('result.data.status lat long : ',result.data.status)
      }

    })
    .catch( (error)=> {
      console.log('Error get lat long : ',error)  
      
    })
  }

  useEffect(()=>{

    SearchBar.current.focus()

    if(last_location != '') {
      SearchBar.current.setAddressText(last_location)
    }


  }, [])
  
  return (

    <View style={styles.Container}>
      
      <Headers HeaderHeight = {hp('6.5%')} HeaderTitle = {screen_title} 
               LeftIconVisible = {true} RightIconVisible = {false}
               LeftIconName = {'angle-left'} LeftIconColor = {'#FFF'}
               LeftIconType = {'font-awesome'} LeftIconSize = {wp('7%')}
               LeftIconFunction = {()=>{props.navigation.goBack()}}
                />
      <ImageBackground source={require("./../../Image/watermark.png")} resizeMode="cover" style={styles.backgroundImage}>

        <GooglePlacesAutocomplete
          ref = {SearchBar}
          requestUrl={{
            useOnPlatform: 'all',
            url:
        'https://maps.googleapis.com/maps/api',
            headers: {
            'X-Android-Package': 'com.pikpak',
            'X-Android-Cert': GoogleMaps.fingerPrint
          }
        }}
          placeholder='Enter Location'
          minLength={2}
          autoFocus={false}
          returnKeyType={'default'}
          fetchDetails={true}
          styles={{
            textInputContainer: {
              backgroundColor: ColorPalet.HeaderColor,
            },
            textInput: {
              height: hp('7%'),
              color: '#5d5d5d',
              fontSize: 16,
              marginLeft: wp('2%'),
              borderRadius: 0,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          onPress={(data, details = null) => {

            // console.log('MoveLocationsData[0].delivery_description after 2 data :  '
            // ,data)
            if(details != null && details != '')
               {  

                // console.log('MoveLocationsData[0].delivery_description after 1 data :  '
                // ,data)
                GetPlaceLatLng(data,details.place_id)
                // UpdateControl1(data,details)
                
                // console.log('MoveLocationsData[0].delivery_description after 1',MoveLocationsData[0]?.delivery_description)
                               
               

               }
          }}
          query={{
            key: GoogleMaps.map_api_key,
            language: 'en',
          }}
          renderRightButton={() => (
            <TouchableOpacity
              style={{
                width: hp('7%'), 
                height: hp('7%'), 
                backgroundColor: '#FFF',
                marginRight: wp('2%'),
                borderRadius: 0,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                justifyContent: 'center'
              }}
              onPress={() => {
                SearchBar.current.setAddressText('')
              }}
            >
              <Icon
                
                style={{color : 'red'}}
                name="close-circle" size={wp('7%')} color={'silver'} type='material-community'
              />
            </TouchableOpacity>
          )}
        />

      </ImageBackground>
      
    </View>
   
   );
 };

 const styles = StyleSheet.create({
  
  Container : {
    flex : 1,
    backgroundColor: ColorPalet.MainBackground
  },
  backgroundImage: {
    height: hp('100%'),
    backgroundColor: '#ABABAB',
    opacity : 100
  }
  });
 
 export default SelectLocation;

