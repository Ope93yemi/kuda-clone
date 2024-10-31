// import styled from "styled-components"
// import { MdOutlineAddToHomeScreen } from "react-icons/md";

import Personal from "./pages/Personal"
import Header from "./static/Header"
import Home from "./pages/Home"
import Footer from "./static/Footer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Business from "./pages/Business";
import Companies from "./pages/Companies";

const App = () =>{
  return (
    // <Container>
    //   <h1>up and running</h1>
    //   <MdOutlineAddToHomeScreen size={40} color= "pink" />
    // </Container>

    <div>
      <BrowserRouter>
         <Header />
          <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/business" element={<Business />} />
            <Route path="/companies" element={<Companies/>} />
          </Routes>
          <Home />
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

// const Container = styled.div`
// background-color: red;
/* font-size: 30px;
color: purple; */
// `