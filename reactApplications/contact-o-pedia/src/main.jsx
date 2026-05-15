import { createRoot } from "react-dom/client";
import { Header } from "./layout/Header.jsx";
import {Footer} from './layout/Footer.jsx'
import {ContactList} from './components/contactPages/ContactList.jsx'


createRoot(document.getElementById("root")).render(
  <div>
    <Header />
    <ContactList/>
    <Footer/>
  </div>
);
