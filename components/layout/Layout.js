import Head from "next/head";
import React from "react";
import ThreeDotsWave from "../common/ThreeDot";
import Footer from "./Footer";
  import Header from "./Header";

 
 

function Layout({ children }) {
   
  return (
    <> 
      <Header   />
      <main>

      <div className="px-2 ">
        
        
        {children? children :<ThreeDotsWave/>}
        
        </div>
        </main>
      <Footer />
       
    </>
  );
}

export default Layout;
