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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
