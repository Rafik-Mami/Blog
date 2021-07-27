import Sidebar from "../../components/sideBar/sideBar";
import SinglePost from "../../components/singlePost/singlePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}