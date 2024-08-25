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

import MDashboard from "./manager_pages/M_Dashboard";
import MDashboard2 from "./manager_pages/M_Dashboard_2";
import MHome from "./manager_pages/M_Home";
import MAccounts from "./manager_pages/M_Accounts";


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

        <Route path = "/manager_dashboard" element ={<MDashboard/>}/>
        <Route path = "/manager_dashboard_reports" element ={<MDashboard2/>}/>
        <Route path = "/manager_home" element ={<MHome/>}/>
        <Route path = "/manager_accounts" element ={<MAccounts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
