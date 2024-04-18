import React from "react";
import "./App.css";

import Nabvar from "./components/navbar/Nabvar";
import Footer from "./components/footer/Footer";

// import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutusPage from "./pages/AboutusPage";
import CarbanCaptr from "./components/Solution/engineering/CarbanCaptr";
import Career from "./components/careers/Career";
import Leader from "./components/company/Leader";
import ContactUs from "./components/company/ContactUs";
import WhereWeWork from "./components/company/WhereWeWork";
import Engineering from "./components/Solution/Engineering";
import OilGase1 from "./components/Solution/engineering/OilGase1";
import OilGase2 from "./components/Solution/engineering/OilGase2";
import RenewalEnergy from "./components/Solution/engineering/RenewalEnergy";
import PowerGenration from "./components/Solution/engineering/PowerGenration";
import WaterTreatment from "./components/Solution/engineering/WaterTreatment";
import PebProject from "./components/Solution/engineering/PebProject";
import MscBuildings from "./components/Solution/engineering/MscBuildings";
import Modling3D from "./components/Solution/engineering/Modling3D";
import PmcProject from "./components/Solution/engineering/PmcProject";
import StructuralAudit from "./components/Solution/Rectrofitting/StructuralAudit";
import PoststructuralAudit from "./components/Solution/Rectrofitting/PoststructuralAudit";
import StrengtheningMeasures from "./components/Solution/Rectrofitting/StrengtheningMeasures";
import Introduction from "./components/Solution/Fabrication/Introduction";
import Servicesdepatment from "./components/Solution/Fabrication/Tools";
import Cementsplants from "./components/Solution/Fabrication/Cementsplants";
import Refineries from "./components/Solution/Fabrication/Refineries";
import Otherindustries from "./components/Solution/Fabrication/Otherindustries";
import Solidwaste from "./components/Solution/WasteManagement/Solidwaste";
import Slaughterhousewaste from "./components/Solution/WasteManagement/Slaughterhousewaste";
import Plasticwaste from "./components/Solution/WasteManagement/Plasticwaste";
import Solidwasteintroduction from "./components/Solution/WasteManagement/Solidwasteintroduction";
import CandDwaste from "./components/Solution/WasteManagement/C&Dwaste";
import Horticulturewaste from "./components/Solution/WasteManagement/Horticulturewaste";
import Wastewater from "./components/Solution/WasteManagement/Wastewater";
import Engineeringpro from "./components/project/engineeringPro/Engineering";
import RectofittingPro from "./components/project/rectrofittingPro/RectofittingPro";
import Fabricationpro from "./components/project/fabricationPro/Fabricationpro";
import Wastemanag from "./components/project/wasteMangPro/Wastemanag";
import National from "./components/ourclients/National";
import International from "./components/ourclients/International";
import Producttools from "./components/Solution/Fabrication/Producttools";
import GetStart from "./pages/GetStart";
import { BsTools } from "react-icons/bs";
import Tools from "./components/Solution/Fabrication/Tools";
import Products from "./components/product/Products";
import ProductDetails from "./components/product/ProductDetails";
import Dashboard from "./components/admindashboard/Dashboard";
import Loginform from "./components/Loginform";
import Signupform from "./components/Signupform";

function App() {
  return (
    <>
      <Nabvar />
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Who we are */}
          <Route path="/company/about-us" element={<AboutusPage />} />
          <Route path="/company/our-leaders" element={<Leader />} />
          <Route path="/company/contact-us" element={<ContactUs />} />
          <Route path="/company/where-we-work" element={<WhereWeWork />} />
          {/* What we do */}
          <Route
            path="/solution/engineering-genral"
            element={<Engineering />}
          />
          {/* Engineering */}
          <Route
            path="/solution/energy-carban-capture"
            element={<CarbanCaptr />}
          />
          <Route path="/solution/energy-oil-gase-1" element={<OilGase1 />} />
          <Route path="/solution/energy-oil-gase-2" element={<OilGase2 />} />
          <Route
            path="/solution/energy-renewal-energy"
            element={<RenewalEnergy />}
          />
          <Route
            path="/solution/energy-power-genration"
            element={<PowerGenration />}
          />
          <Route
            path="/solution/energy-water-treament"
            element={<WaterTreatment />}
          />
          <Route path="/solution/energy-peb-project" element={<PebProject />} />
          <Route
            path="/solution/energy-msc-bulding"
            element={<MscBuildings />}
          />
          <Route path="/solution/energy-3d-modling" element={<Modling3D />} />
          <Route path="/solution/energy-pmc-project" element={<PmcProject />} />
          {/* Rectrofitting */}
          <Route
            path="/solution/rectrofitting-structural-audit"
            element={<StructuralAudit />}
          />
          <Route
            path="/solution/rectrofitting-post-structural-audit"
            element={<PoststructuralAudit />}
          />
          <Route
            path="/solution/rectrofitting-strengthening-measures"
            element={<StrengtheningMeasures />}
          />

          {/* Fabrication */}

          <Route
            path="/solution/fabrication-comapny-overview"
            element={<Introduction />}
          />
          <Route path="/solution/fabrication-tools" element={<Tools />} />
          <Route
            path="/solution/fabrication-product-tools"
            element={<Producttools />}
          />
          <Route
            path="/solution/fabrication-cements-plants"
            element={<Cementsplants />}
          />
          <Route
            path="/solution/fabrication-refinerines"
            element={<Refineries />}
          />
          <Route
            path="/solution/fabrication-other-industries"
            element={<Otherindustries />}
          />

          {/* Waste Management */}

          <Route
            path="/solution/wastemanagemet-inroduction"
            element={<Solidwasteintroduction />}
          />
          <Route
            path="/solution/wastemanagemet-solid-waste"
            element={<Solidwaste />}
          />
          <Route
            path="/solution/wastemanagemet-slaughterhouse-waste"
            element={<Slaughterhousewaste />}
          />
          <Route
            path="/solution/wastemanagemet-plastic-waste"
            element={<Plasticwaste />}
          />
          <Route
            path="/solution/wastemanagemet-c&dwaste"
            element={<CandDwaste />}
          />
          <Route
            path="/solution/wastemanagemet-horticulture-wasre"
            element={<Horticulturewaste />}
          />
          <Route
            path="/solution/wastemanagemet-water-waste"
            element={<Wastewater />}
          />

          {/* Projects */}
          <Route
            path="/projects/engineeringpro/engineering"
            element={<Engineeringpro />}
          />
          <Route
            path="/projects/rectrofittingpro/rectrofitttin"
            element={<RectofittingPro />}
          />
          <Route
            path="/projects/fabricationpro/fabrication"
            element={<Fabricationpro />}
          />
          <Route
            path="/projects/wastemanagementpro/wastemaneg"
            element={<Wastemanag />}
          />

          {/* Our clients */}

          <Route path="/ourclients/national-clients" element={<National />} />
          <Route
            path="/ourclients/inter-national-clients"
            element={<International />}
          />

          {/* Products */}
          <Route path="/products/product" element={<Products />} />
          <Route
            path="/products/product-details"
            element={<ProductDetails />}
          />
          <Route path="/carees" element={<Career />} />
          {/* Dashboard */}
          <Route path="/admin-dashboard" element={<Dashboard />} />

          <Route path="/login" element={<Loginform />} />
          {/* <Route path="/signup" element={<Signupform />} /> */}
          <Route path="/get-start" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
