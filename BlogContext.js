import React,{useState,useContext} from 'react';


const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
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
    <BlogContext.Provider value={{userData,setUserData}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;