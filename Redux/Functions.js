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

export  function  updateLocationState(userData,setUserData,itemCurrentLat,itemCurrentLong,itemCurrentac)
   {

console.log('test location state',userData)
var newState = userData.map((item, idx) => {
    return {
      ...item,
      current_latitude: itemCurrentLat != null ? itemCurrentLat : item.current_latitude,
      current_longitude: itemCurrentLong != null ? itemCurrentLong : item.current_longitude,
      current_accuracy : itemCurrentac != null ? itemCurrentac : item.current_accuracy
    }
  }
)
console.log('test location state 2 ',newState)
setUserData(newState)
}


export  function  updateMoveLocationState(userData,setUserData,itemdeliverydescription
  ,itemdeliverylatitude,itemdeliverylongitude,itempickupdescription,itempickuplatitude,itempickuplongitude,itemdistance)
   {

console.log('test location state',userData)
var newState = userData.map((item, idx) => {
    return {
      ...item,
      delivery_description: itemdeliverydescription != null ? itemdeliverydescription : item.delivery_description,
        delivery_latitude: itemdeliverylatitude != null ? itemdeliverylatitude : item.delivery_latitude,
        delivery_longitude: itemdeliverylongitude != null ? itemdeliverylongitude : item.delivery_longitude,
        pickup_description: itempickupdescription != null ? itempickupdescription : item.pickup_description,
        pickup_latitude: itempickuplatitude != null ? itempickuplatitude : item.pickup_latitude,
        pickup_longitude: itempickuplongitude != null ? itempickuplongitude : item.pickup_longitude,
        distance: itemdistance != null ? itemdistance : item.distance
    }
  }
)
console.log('test location state 2 ',newState)
setUserData(newState)
}