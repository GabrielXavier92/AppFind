import React from "react";
import { Router, Scene } from "react-native-router-flux";

// import FindPage from "../pages/findPage/FindPage"
import Home from "../pages/home/home";

export default props => (
   <Router>
      <Scene hideNavBar={true} key="root">
         <Scene key="home" component={Home} />
         {/* <Scene key="findPage" component={Home} /> */}
      </Scene>
   </Router>
);
