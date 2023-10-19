import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Booking from "./pages/Booking";
// import Payment from "./pages/Payment";

import PublicRoute from './routes/PublicRoute';
import ErrorScreen from './screens/ErrorScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <AuthProvider>
         
            
              <Navbar />
              <Routes>
                <PublicRoute exact path="/signin"><SignInScreen /></PublicRoute>
                <PublicRoute exact path="/signup"><SignUpScreen /></PublicRoute>
                <Route path="*"><ErrorScreen /></Route>
              </Routes>
            
         
        </AuthProvider>
      </BrowserRouter>



      {/* <div>
        < Navbar />
       
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}  />  
            
          </Routes>
          <Footer />
        </BrowserRouter>
      
     </div> */}
    </>
  );
}

export default App;
