import {BrowserRouter, Route, Routes} from "react-router-dom";
import GHome from "./pages/G_Home";
import GAbout from "./pages/G_About";
import GContact from "./pages/G_Contact";
import GLogin from "./pages/G_Login";
import GRegister from "./pages/G_Register";
import GFaq from "./pages/G_Faq";
import GTerms from "./pages/G_Terms";
import GCancel from "./pages/G_Cancel";
import GWebsiteData from "./pages/G_WebsiteData";
import GProfile from "./pages/G_Profile";
import GEvent_1 from "./pages/G_Event_1";
import GResturant_1 from "./pages/G_Resturant_1";
import GResturant_2 from "./pages/G_Resturant_2";

import ALogin from "./manager_pages/A_Login";

import MDashboard from "./manager_pages/M_Dashboard";
import MDashboard2 from "./manager_pages/M_Dashboard_2";
import MHome from "./manager_pages/M_Home";
import MAccounts from "./manager_pages/M_Accounts";
import MRoom from "./manager_pages/M_Room";
import MFood from "./manager_pages/M_Food";
import MDrink from "./manager_pages/M_Drink";
import MConcierge from "./manager_pages/M_Concierge";
import MLaundry from "./manager_pages/M_Laundry";
import MVenue from "./manager_pages/M_Venue";
import MFoodPackage from "./manager_pages/M_FoodPackage";

import FDashboard from "./frontdesk_pages/F_Dashboard";
import FHome from "./frontdesk_pages/F_Home";
import FRoomWalkIn from "./frontdesk_pages/F_RoomWalkIn";
import FRoomBook from "./frontdesk_pages/F_RoomBook";
import FEventWalkIn from "./frontdesk_pages/F_EventWalkIn";
import FRoomReservation from "./frontdesk_pages/F_RoomReservation";
import FConciergeLaundry from "./frontdesk_pages/F_ConciergeLaundry";
import FAdditionalItem from "./frontdesk_pages/F_AdditionalItem";
import FMainHouse from "./frontdesk_pages/F_Main_House";

import RHomeRestaurant from "./restaurant_pages/R_Home";
import RDashboard from "./restaurant_pages/R_Dashboard";
import RDashboard2 from "./restaurant_pages/R_Dashboard2";
import RAllOrders from "./restaurant_pages/R_AllOrders";
import ROrder from "./restaurant_pages/R_Order";
import RIncomingOrder from "./restaurant_pages/R_IncomingOrder";
import RProceedRestaurant from "./restaurant_pages/R_ProceedOrder";
import RTableMain from "./restaurant_pages/R_TableMain";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GLogin/>}/>
        <Route path="/register" element={<GRegister/>}/>
        <Route path="/profile_guest" element={<GProfile/>}/>

        <Route path="/faq" element={<GFaq/>}/>
        <Route path="/terms_and_conditions" element={<GTerms/>}/>
        <Route path="/cancel_policy" element={<GCancel/>}/>
        <Route path="/website_data_policy" element={<GWebsiteData/>}/>

        <Route path="/" element={<GHome/>}/>
        <Route path = "/about_us" element ={<GAbout/>}/>
        <Route path = "/contact_us" element ={<GContact/>}/>

        <Route path="/event_filtering" element={<GEvent_1/>}/>
        <Route path="/resturant_filtering" element={<GResturant_1/>}/>
        <Route path="/resturant_tables" element={<GResturant_2/>}/>

        <Route path = "/staff_login" element ={<ALogin/>}/>

        <Route path = "/manager_dashboard" element ={<MDashboard/>}/>
        <Route path = "/manager_dashboard_reports" element ={<MDashboard2/>}/>
        <Route path = "/manager_home" element ={<MHome/>}/>
        <Route path = "/manager_accounts" element ={<MAccounts/>}/>
        <Route path = "/manager_room" element ={<MRoom/>}/>
        <Route path = "/manager_food" element ={<MFood/>}/>
        <Route path = "/manager_drink" element ={<MDrink/>}/>
        <Route path = "/manager_concierge" element ={<MConcierge/>}/>
        <Route path = "/manager_laundry" element ={<MLaundry/>}/>
        <Route path = "/manager_venue" element ={<MVenue/>}/>
        <Route path = "/manager_food_package" element ={<MFoodPackage/>}/>

        <Route path = "/frontdesk_dashboard" element ={<FDashboard/>}/>
        <Route path = "/frontdesk_home" element ={<FHome/>}/>
        <Route path = "/frontdesk_room_walk_in" element ={<FRoomWalkIn/>}/>
        <Route path = "/frontdesk_room_walk_in/room_booking" element ={<FRoomBook/>}/>
        <Route path="/frontdesk_event_walk_in" element={<FEventWalkIn/>}/>
        <Route path="/frontdesk_room_reservation" element={<FRoomReservation/>}/>
        <Route path ="/frontdesk_concierge_and_laundry" element={<FConciergeLaundry/>}/>
        <Route path="/frontdesk_additional_item" element={<FAdditionalItem/>}/>
        <Route path="/frontdesk_maintenance_and_housekeeping" element={<FMainHouse/>}/>

        <Route path = "/restaurant_home" element ={<RHomeRestaurant/>}/>
        <Route path = "/restaurant_dashboard" element ={<RDashboard/>}/>
        <Route path = "/restaurant_dashboard_table" element ={<RDashboard2/>}/>
        <Route path = "/restaurant_all_orders" element ={<RAllOrders/>}/>
        <Route path = "/restaurant_order" element ={<ROrder/>}/>
        <Route path = "/restaurant_incoming_orders" element ={<RIncomingOrder/>}/>
        <Route path ="/restaurant_order/proceed_order" element={<RProceedRestaurant/>}/>
        <Route path = "/restaurant_table_maintenance" element ={<RTableMain/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
