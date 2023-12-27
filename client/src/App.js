import React,{useEffect,createContext,useReducer,useContext} from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import Profile from "./components/screens/Profile";
import Signup from "./components/screens/Signup";
import CreatePost from "./components/screens/CreatePost";
import UserProfile from "./components/screens/UserProfile";
import SubscribesUserPosts from "./components/screens/SubscribesUserPosts"
import {reducer,initialState} from "./reducers/userReducer" 

export const UserContext=createContext()
const Routing=()=>{
  const history=useNavigate()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
     const user=JSON.parse(localStorage.getItem("user"))
     if(user){
      dispatch({type:"USER",payload:user})
     }
     else{
      history('./signin')
     }
  },[])
  return(
    <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/signup" element={<Signup/>}/>
       <Route exact path="/signin" element={<SignIn/>}/>
       <Route exact path="/profile" element={<Profile/>}/>
       <Route exact path="/create" element={<CreatePost/>}/>
       <Route exact path="/profile/:userid" element={<UserProfile/>}/>
       <Route exact path="/myfollowingpost" element={<SubscribesUserPosts/>}/>
       </Routes>
  )
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
       <Navbar/>
       <Routing/>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
