import React,{useState,useEffect} from "react";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sideBar/sideBar";
import "./home.css";
import axios from "axios"
import { useLocation } from "react-router-dom";
export default function Homepage() {
 const [posts, setPosts] = useState([])
 const location=useLocation()

 useEffect(()=>{
const fetchPosts=async()=>{
const res=await axios.get("/posts"+location.search)
setPosts(res.data)
console.log(location)
}
fetchPosts()
 },[])
 
 
 return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}