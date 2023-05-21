import BlogContext from './../BlogContext';


export async function  updateStates  (userData,setUserData,itemuserid,itemusername,itempassword,itemtype,itemfacebookid,
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

export async function  updateLocationState(currentData,setCurrentData,itemCurrentLat,itemCurrentLong,itemCurrentac)
   {

console.log('test location state',currentData)
var newState = currentData.map((item, idx) => {
    return {
      ...item,
      current_latitude: itemCurrentLat != null ? itemCurrentLat : item.current_latitude,
      current_longitude: itemCurrentLong != null ? itemCurrentLong : item.current_longitude,
      current_accuracy : itemCurrentac != null ? itemCurrentac : item.current_accuracy
    }
  }
)
console.log('test location state 2 ',newState)
setCurrentData(newState)
}



export  async function  updateMoveLocationState(MoveLocationsData,setMoveLocationsData,itemdeliverydescription,itemdeliverylatitude
  ,itemdeliverylongitude,itempickupdescription,itempickuplatitude,itempickuplongitude,itemdistance)
   {

console.log('test location state',MoveLocationsData)
var newState = MoveLocationsData.map((item, idx) => {
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
setMoveLocationsData(newState)
}


export  async function  updateDefaultLocationState(DefaultLocationData,setDefaultLocationData,itemdefaultlatitude,itemdefaultlongitude)
   {
console.log('test location state',DefaultLocationData)
var newState = DefaultLocationData.map((item, idx) => {
    return {
      ...item,
      default_latitude: itemdefaultlatitude != null ? itemdefaultlatitude : item.default_latitude,
      default_longitude: itemdefaultlongitude != null ? itemdefaultlongitude : item.default_longitude
     
    }
  }
)
console.log('test location state 2 ',newState)
setDefaultLocationData(newState)
}



export async function  updateMoveState(MoveData,setMoveData,itemaddressofpickup,itemgpsofpickup
  ,itemaddressofdelivery,itemgpsofdelivery,itemmovetypeid,itempickupunitnumber,itempickupstairs,itempickupelevatorbuilding,
  itempickupparkinginfo,itemdeliveryunitNumber,itemdeliverystairs,itemdeliveryelevatorbuilding,itemdeliveryparkinginfo,itemdateofpickup,
  itemtimeofpickup,itemmoveimages,itemweight,itemnoofhelpers,itemdescription,itemconsumervehicleid,itemmovebids,itemdeliveryplaceid
  )
   {

console.log('test location state',MoveData)
var newState = MoveData.map((item, idx) => {
    return {
      ...item,
      address_of_pickup : itemaddressofpickup != null ? itemaddressofpickup : item.address_of_pickup,
      gps_of_pickup : itemgpsofpickup != null ? itemgpsofpickup : item.gps_of_pickup,
      address_of_delivery : itemaddressofdelivery != null ? itemaddressofdelivery : item.address_of_delivery,
      gps_of_delivery : itemgpsofdelivery != null ? itemgpsofdelivery : item.gps_of_delivery,
      move_type_id : itemmovetypeid != null ? itemmovetypeid : item.move_type_id,
      pickup_unit_number : itempickupunitnumber != null ? itempickupunitnumber : item.pickup_unit_number,
      pickup_stairs : itempickupstairs != null ? itempickupstairs : item.pickup_stairs,
      pickup_elevator_building : itempickupelevatorbuilding != null ? itempickupelevatorbuilding : item.pickup_elevator_building,
      pickup_parking_info : itempickupparkinginfo != null ? itempickupparkinginfo : item.pickup_parking_info,
      delivery_unit_Number : itemdeliveryunitNumber != null ? itemdeliveryunitNumber : item.delivery_unit_Number,
      delivery_stairs : itemdeliverystairs != null ? itemdeliverystairs : item.delivery_stairs,
      delivery_elevator_building : itemdeliveryelevatorbuilding != null ? itemdeliveryelevatorbuilding : item.delivery_elevator_building,
      delivery_parking_info : itemdeliveryparkinginfo != null ? itemdeliveryparkinginfo : item.delivery_parking_info,
      date_of_pickup : itemdateofpickup != null ? itemdateofpickup : item.date_of_pickup,
      time_of_pickup : itemtimeofpickup != null ? itemtimeofpickup : item.time_of_pickup,
      move_images : itemmoveimages != null ? itemmoveimages : item.move_images,
      weight : itemweight != null ? itemweight : item.weight,
      no_of_helpers : itemnoofhelpers != null ? itemnoofhelpers : item.no_of_helpers,
      description : itemdescription != null ? itemdescription : item.description,
      consumer_vehicle_id : itemconsumervehicleid != null ? itemconsumervehicleid : item.consumer_vehicle_id,
      move_bids : itemmovebids != null ? itemmovebids : item.move_bids,
      delivery_place_id : itemdeliveryplaceid != null ? itemdeliveryplaceid : item.delivery_place_id,
    }
  }
)
console.log('test location state 2 ',newState)
setMoveData(newState)
}



export async function  updateEditMoveDataState(EditMoveData,setEditMoveData,itemaddressofpickup,itemgpsofpickup,
  itemaddressofdelivery,itemgpsofdelivery,itemmovetypeid,itemdateofpickup,itemtimeofpickup,itemmoveimages,
  itemweight,itemnoofhelpers,itemdescription,itemconsumervehicleid,itemmovebids,itemmoveid)
   {

console.log('test location state',EditMoveData)
var newState = EditMoveData.map((item, idx) => {
    return {
      ...item,
      address_of_pickup : itemaddressofpickup != null ? itemaddressofpickup : item.address_of_pickup,
      gps_of_pickup : itemgpsofpickup != null ? itemgpsofpickup : item.gps_of_pickup,
      address_of_delivery : itemaddressofdelivery != null ? itemaddressofdelivery : item.address_of_delivery,
      gps_of_delivery : itemgpsofdelivery != null ? itemgpsofdelivery : item.gps_of_delivery,
      move_type_id : itemmovetypeid != null ? itemmovetypeid : item.move_type_id,
      date_of_pickup : itemdateofpickup != null ? itemdateofpickup : item.date_of_pickup,
      time_of_pickup : itemtimeofpickup != null ? itemtimeofpickup : item.time_of_pickup,
      move_images : itemmoveimages != null ? itemmoveimages : item.move_images,
      weight : itemweight != null ? itemweight : item.weight,
      no_of_helpers : itemnoofhelpers != null ? itemnoofhelpers : item.no_of_helpers,
      description : itemdescription != null ? itemdescription : item.description,
      consumer_vehicle_id : itemconsumervehicleid != null ? itemconsumervehicleid : item.consumer_vehicle_id,
      move_bids : itemmovebids != null ? itemmovebids : item.move_bids,
      move_id:itemmoveid != null ? itemmoveid : item.move_id
      
    }
  }
)
console.log('test location state 2 ',newState)
setEditMoveData(newState)
}




// export  function  updateCurrentMoveState(CurrentMove,setCurrentMove,itemmoveid,itemprovidermovedetailsheader,itemdeliverydescription,itemdeliverylatitude,
//   itemdeliverylongitude,itempickupdescription,itempickuplatitude,itempickuplongitude
//   )
//    {

// console.log('test location state',CurrentMove)
// var newState = CurrentMove.map((item, idx) => {
//     return {
//       ...item,
//       move_id : itemmoveid != null ? itemmoveid : item.move_id,
//       provider_move_details_header : itemprovidermovedetailsheader != null ? itemprovidermovedetailsheader : item.provider_move_details_header,
//       delivery_description: itemdeliverydescription != null ? itemdeliverydescription : item.delivery_description,
//       delivery_latitude: itemdeliverylatitude != null ? itemdeliverylatitude : item.delivery_latitude,
//       delivery_longitude: itemdeliverylongitude != null ? itemdeliverylongitude : item.delivery_longitude,
//       pickup_description: itempickupdescription != null ? itempickupdescription : item.pickup_description,
//       pickup_latitude: itempickuplatitude != null ? itempickuplatitude : item.address_of_pickup,
//       pickup_longitude:itempickuplongitude != null ? itempickuplongitude : item.address_of_pickup
      
//     }
//   }
// )
// console.log('test location state 2 ',newState)
// setCurrentMove(newState)
// }


export async function  updateCurrentMoveState(CurrentMove,setCurrentMove,itemmoveid,itemprovidermovedetailsheader,itemdeliverydescription,itemdeliverylatitude,
  itemdeliverylongitude,itempickupdescription,itempickuplatitude,itempickuplongitude
  )
   {

console.log('test location state',CurrentMove)
var newState = CurrentMove.map((item, idx) => {
    return {
      ...item,
      move_id : itemmoveid != null ? itemmoveid : item.move_id,
      provider_move_details_header : itemprovidermovedetailsheader != null ? itemprovidermovedetailsheader : item.provider_move_details_header,
      delivery_description: itemdeliverydescription != null ? itemdeliverydescription : item.delivery_description,
      delivery_latitude: itemdeliverylatitude != null ? itemdeliverylatitude : item.delivery_latitude,
      delivery_longitude: itemdeliverylongitude != null ? itemdeliverylongitude : item.delivery_longitude,
      pickup_description: itempickupdescription != null ? itempickupdescription : item.pickup_description,
      pickup_latitude: itempickuplatitude != null ? itempickuplatitude : item.address_of_pickup,
      pickup_longitude:itempickuplongitude != null ? itempickuplongitude : item.address_of_pickup
      
    }
  }
)
console.log('test location state 2 ',newState)
setCurrentMove(newState)
}



export async function  updatePDDataSatte(PDData,setPDData,itemorganizationtype,itemvehicleid,itemmakeid,itemmodelid,itemyear,itemcolorid,itemtowhitch,
  itemtrailer,itemliftupto,itemaddress1,itemstate,itemcity,itemzipcode,itemvehiclephoto,itemvehicleinspectionform,itemvehicleinsurance,
  itemvehicleregistration,itemtraileropen,itemequipmentid,itemmerchant,itemmaxweight,itembedlength,itemaddress2

  )
   {

console.log('test location state',PDData)
var newState = PDData.map((item, idx) => {
    return {
      ...item,
      organization_type : itemorganizationtype != null ? itemorganizationtype : item.organization_type,
      vehicle_id : itemvehicleid != null ? itemvehicleid : item.vehicle_id,
      make_id : itemmakeid != null ? itemmakeid : item.make_id,
      model_id :itemmodelid != null ? itemmodelid : item.model_id,
      _year : itemyear != null ? itemyear : item._year,
      color_id : itemcolorid != null ? itemcolorid : item.color_id,
      tow_hitch : itemtowhitch != null ? itemtowhitch : item.tow_hitch,
      trailer : itemtrailer != null ? itemtrailer : item.trailer,
      lift_up_to : itemliftupto != null ? itemliftupto : item.lift_up_to,
      address_1 : itemaddress1 != null ? itemaddress1 : item.address_1,
      state : itemstate != null ? itemstate : item.state,
      city : itemcity != null ? itemcity : item.city,
      zip_code : itemzipcode != null ? itemzipcode : item.zip_code,
      vehicle_photo : itemvehiclephoto != null ? itemvehiclephoto : item.vehicle_photo,
      vehicle_inspection_form : itemvehicleinspectionform != null ? itemvehicleinspectionform : item.vehicle_inspection_form,
      vehicle_insurance : itemvehicleinsurance != null ? itemvehicleinsurance : item.vehicle_insurance,
      vehicle_registration : itemvehicleregistration != null ? itemvehicleregistration : item.vehicle_registration,
      trailer_open : itemtraileropen != null ? itemtraileropen : item.trailer_open,
      equipment_id : itemequipmentid != null ? itemequipmentid : item.equipment_id,
      merchant : itemmerchant != null ? itemmerchant : item.merchant,
      max_weight : itemmaxweight != null ? itemmaxweight : item.max_weight,
      bed_length : itembedlength != null ? itembedlength : item.bed_length,
      address_2 : itemaddress2 != null ? itemaddress2 : item.address_2
     
      
    }
  }
)
console.log('test location state 2 ',newState)
setPDData(newState)
}


export async function  updateVDDataState(VDData,setVDData,itemvehicleid)
   {
console.log('test location state',VDData)
var newState = VDData.map((item, idx) => {
    return {
      ...item,
      vehicle_id : itemvehicleid != null ? itemvehicleid : item.vehicle_id
    }
  }
)
console.log('test location state 2 ',newState)
setVDData(newState)
}















