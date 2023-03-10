// import { data } from "../components/pie";

import dynamic from "next/dynamic";
// import Table from "../components/table";
import homeStyles from "../styles/Home.module.css";
import ProgressBar from "../components/progress-bar";
import LinearWithValueLabel from "../components/linearprogresswithlabel";
import Link from "next/link";
import Todolist from "../components/Todolist";

const Dashboard = () => {
  return (
    <div className="w-[100%]">
      <div className="">
        <div className=" p-6 flex flex-col md:space-y-[2%]">
          <span>Personal Progress</span>
          <LinearWithValueLabel type="student" />
        </div>
        <div className="p-6 flex flex-col md:space-y-[2%]">
          <span>Assignment Progress</span>
          <LinearWithValueLabel type="prof" />
        </div>
      </div>
      <div className="flex w-[100%] ">
        <Todolist />
      </div>
    </div>
  );
};
export default Dashboard;

//progress self prof
//todo list checklist selfgoals, professor
//flex flex-col space-y-[10%] my-[4%]         flex space-x-[10%]             flex space-x-12
