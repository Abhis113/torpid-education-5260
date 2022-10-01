import React from 'react'
import Topsection  from "../Component/Home/Topsection";
import Navbar from "../Component/Home/Navbar";
import Bottomsection from "../Component/Home/Bottomsection";
import Footer from "../Component/Home/Footer";
 function Home() {
  return (
    <>
      <Navbar/>
      <Topsection/>
      <Bottomsection/>
      <Footer/>
    </>
  )
}
export default Home;