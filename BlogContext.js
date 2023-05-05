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
        CurrentPage:0,
        current_latitude: 0,
        current_longitude: 0,
        current_accuracy: 0
        }
      ]
     );


     const [CurrentData, setCurrentData] = useState([
      {
      current_latitude: 0,
      current_longitude: 0,
      current_accuracy: 0
      }
     ])

     const [MoveLocationsData, setMoveLocationsData] = useState([
      {
        delivery_description: '',
        delivery_latitude: 0,
        delivery_longitude: 0,
        pickup_description: '',
        pickup_latitude: 0,
        pickup_longitude: 0,
        distance: 0
      }
     ])

     const [DefaultLocationData,setDefaultLocationData] = useState([
      {
        default_latitude: 0,
        default_longitude: 0,
      }
     ])
     const [MoveData,setMoveData] =useState([
      {
        address_of_pickup : '',
        gps_of_pickup : '',
        address_of_delivery : '',
        gps_of_delivery : '',
        move_type_id : '',
        pickup_unit_number : 0,
        pickup_stairs : '',
        pickup_elevator_building : '',
        pickup_parking_info : '',
        delivery_unit_Number : 0,
        delivery_stairs : '',
        delivery_elevator_building : '',
        delivery_parking_info : '',
        date_of_pickup : '',
        time_of_pickup : '',
        move_images : '',
        weight : 0,
        no_of_helpers : 0,
        description : '',
        consumer_vehicle_id : '',
        move_bids : [],
        delivery_place_id : ''
      }
     ])

     const [EditMoveData,setEditMoveData] = useState([
      {
        address_of_pickup : '',
        gps_of_pickup : '',
        address_of_delivery : '',
        gps_of_delivery : '',
        move_type_id : '',
        date_of_pickup : '',
        time_of_pickup : '',
        move_images : [],
        weight : 0,
        no_of_helpers : 0,
        description : '',
        consumer_vehicle_id : '',
        move_bids : []
        ,move_id:''
      }
     ])


     const[CurrentMove,setCurrentMove] = useState([
      {
        move_id : '',
        provider_move_details_header : 'off',
        delivery_description: '',
        delivery_latitude: 0,
        delivery_longitude: 0,
        pickup_description: '',
        pickup_latitude: 0,
        pickup_longitude: 0,
    }
     ])

     const[PDData,setPDData] = useState([{
      organization_type : '',
    vehicle_id : '',
    make_id : '',
    model_id : '',
    _year : '',
    color_id : '',
    tow_hitch : '',
    trailer : '',
    lift_up_to : '',
    address_1 : '',
    state : '',
    city : '',
    zip_code : '',
    vehicle_photo : '',
    vehicle_inspection_form : '',
    vehicle_insurance : '',
    vehicle_registration : '',
    trailer_open : '',
    equipment_id : '',
    merchant : '',
    max_weight : '',
    bed_length : '',
    address_2 : ''
     }])

     const[VDData,setVDData] = useState([
      {
        vehicle_id : ''
      }
     ])


  return (
    <BlogContext.Provider value={{userData,setUserData,CurrentData,setCurrentData,
    MoveLocationsData, setMoveLocationsData,DefaultLocationData,setDefaultLocationData,
    MoveData,setMoveData,
    EditMoveData,setEditMoveData,
    CurrentMove,setCurrentMove,
    PDData,setPDData,
    VDData,setVDData
    
    }}>


      {children}
    
    </BlogContext.Provider>
  );
};

export default BlogContext;