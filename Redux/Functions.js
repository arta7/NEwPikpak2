import BlogContext from './../BlogContext';


export  function  updateStates  (userData,setUserData,itemuserid,itemusername,itempassword,itemtype,itemfacebookid,
    itemgoogleid,itememail,itemrole,itemstatus,itemInlineStatus,itembadgeCount,itemCurrentPage)
     {

  console.log('test1',userData)
  var newState = userData.map((item, idx) => {
      return {
        ...item,
        user_id: itemuserid 
        != null ? itemuserid : item.user_id ,
      username: itemusername != null ? itemusername : item.username,
      password: itempassword != null ? itempassword : item.password,
      type: itemtype != null ? itemtype : item.type,
      facebook_id: itemfacebookid != null ? itemfacebookid : item.facebook_id,
      google_id: itemgoogleid != null ? itemgoogleid : item.google_id,
      email: itememail != null ? itememail : item.email,
      role: itemrole != null ? itemrole : item.role,
      status:itemstatus != null ? itemstatus : item.status,
      InlineStatus:itemInlineStatus != null ? itemInlineStatus : item.InlineStatus,
      badgeCount:itembadgeCount != null ? itembadgeCount : item.badgeCount,
      CurrentPage:itemCurrentPage != null ? itemCurrentPage : item.CurrentPage
      }
    }
  )
  console.log('test2',newState)
  setUserData(newState)
}