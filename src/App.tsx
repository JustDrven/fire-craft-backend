import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./css/style.css";
import Page404 from "./pages/Page404";
import Nabory from "./pages/nabor/Nabory";
import Changelogs from "./pages/Changelogs";
import Helper from "./pages/nabor/Helper";
import Servers from "./pages/public/Servers";
import ServerList from "./pages/public/ServerList";

function App() {
 
  return (
    <>
    <Navbar />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/nabor/" element={ <Nabory helper={true} builder={false} />} />
        <Route path="/nabor/helper" element={ <Helper />} />
        <Route path="/changelog/" element={<Changelogs />} />
        <Route path="*" element={ <Page404 />} />
        <Route path="/public/api/servers/id/:serverID" element={ <Servers /> } />
        <Route path="/public/api/servers/" element={ <ServerList /> } />
      </Routes>
    </BrowserRouter>

    <Footer />
    </>
  )
}

export default App
