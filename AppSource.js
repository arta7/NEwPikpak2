/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import App from './App';
import {Redux} from './Redux/Data'
import PushController from './PushController';
import UserContext from './UI/Context/UserContext';
const AppSource  = (props) => {
     // const value = useContext(Redux);
      // const [context, setContext] = useState(0);

      const [userData, setUserData] = useState([
        {
         
            user_id: '',
            username: '',
            password: '',
            type: '',
            facebook_id: '',
            google_id: '',
            email: '',
            role: '',
            status:0,
            InlineStatus:0,
            badgeCount:0,
            CurrentPage:0
            }]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
     <App />
  
     <PushController/>
     </UserContext.Provider>
  );
};



export default AppSource;
