import React from "react";
import ChatBot from "react-simple-chatbot";
import DriveEtaIcon from '@material-ui/icons/DriveEta';

import './App.css';

function App() {

  const steps = [

    {

      id: "Greet",

      message: "Welcome to Cars24/7 , how may we help you? ",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your topic!",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "Repair",

          label: "Repair",

          trigger: "Repairinfo",

        },

        { value: "Maintaince",
         label: "Maintaince", 
         trigger: "MaintainceInfo" },

      ],

    },

    {
      id: "Repairinfo",
      message: "Please provide your Contact number!",
      trigger :"RepairName"

    },

    {
      id :"RepairName" ,
      user : true,
      trigger : "Repair"

    },

    {

      id: "Repair",

      message:

        "For your Car Repairing , Our team will contact you As Soon As possible",

      end: true,

    },

    {
      id: "MaintainceInfo",
      message: "Please provide your Contact number!",
      trigger :"MaintainceName"

    },

    {
      id :"MaintainceName" ,
      user : true,
      trigger : "Maintaince"

    },



    

    {

      id: "Maintaince",

      message:

        "For your Car Maintaince, Our team will contact you As Soon As possible",

      end: true,

    },

  ]; 
  return (
    <div className="App">

      <div className = "heading">
        Cars24 <DriveEtaIcon />
      </div>
      
      <ChatBot steps ={steps}/>
    </div>
  );
}

export default App;
