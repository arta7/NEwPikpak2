import * as React from 'react';
import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import UserContext from './UI/Context/UserContext';
import App from './App';


export default function App1() {
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
    </UserContext.Provider>
     
  );
}