import React, { useEffect, useState } from "react";
import SensorValues from "./SensorValues";
import { Pyramid, CloudRain, Activity } from "lucide-react";
import fetchData from "../Utils/fetchdata"; // Import your fetchData function

const Hero = () => {
  // State to store sensor data
  const [sensorData, setSensorData] = useState({});
  const [alert, setAlert] = useState("");
  const [soilalert, setSoilAlert] = useState("");
  const [rainalert, setRainAlert] = useState();
  const [mudalert, setMudAlert] = useState("");
  const soilMoistureThreshold = 2800; // Soil moisture threshold
  const distanceThreshold = 20; // Distance threshold in centimeters
  const rainGaugeThreshold = 2000; // Rain gauge threshold

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setSensorData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(() => {
      getData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (
      (sensorData.field1 <= soilMoistureThreshold &&
        sensorData.field2 <= rainGaugeThreshold) ||
      sensorData.field3 <= distanceThreshold
    ) {
      setAlert("Danger: Critical conditions detected!");
    } else if (
      (sensorData.field1 <= soilMoistureThreshold + 500 &&
        sensorData.field2 <= rainGaugeThreshold + 500) ||
      sensorData.field3 <= distanceThreshold + 10
    ) {
      setAlert("Normal: Moderate conditions detected!");
    } else {
      setAlert("Safe: Conditions are normal.");
      setSoilAlert("Low")
      setRainAlert("Low")
      setMudAlert("No slide detected")
    }

    if (sensorData.field1 <= soilMoistureThreshold){
      setSoilAlert("High")
    }
    if (sensorData.field1 <= soilMoistureThreshold+500){
      setSoilAlert("Normal")
    }
    if (sensorData.field2 <= rainGaugeThreshold){
      setRainAlert("High")
    }
    if (sensorData.field2 <= rainGaugeThreshold+500){
      setRainAlert("Normal")
    }
    if (sensorData.field3 <= distanceThreshold){
      setMudAlert("Slide detected")
    }

  }, [sensorData]); 

  return (
    <div className="flex w-full flex-col px-6 py-5 gap-5">
      <div className="text-3xl">
        <h1>Dashboard</h1>
      </div>
      <div className="bg-white w-full p-2">
        <h1>Home</h1>
      </div>
      <div className="flex gap-5">
        <SensorValues
          value={sensorData.field1}
          sensor_name="Soil Moisture"
          color="bg-red-400"
          icon={<Pyramid size={30} />}
        />
        <SensorValues
          value={sensorData.field2}
          sensor_name="Rain"
          color="bg-green-400"
          icon={<CloudRain size={30} />}
        />
        <SensorValues
          value={sensorData.field3}
          sensor_name="Mud/Rock Sliding Dist"
          color="bg-yellow-400"
          icon={<Activity size={30} />}
        />
      </div>
      <div className="bg-white w-full p-2 flex flex-col gap-5">
        <span className="font-semibold">Indication</span>
        <div className="w-full flex justify-between">
          <div className="p-2 flex flex-col gap-5">
            <h1 className="text-xl">Soil Alert: <b>{soilalert}</b></h1>
            <h1 className="text-xl">Rainfall Alert: <b>{rainalert}</b></h1>
            <h1 className="text-xl">Mud/Rock Sliding Alert: <b>{mudalert}</b></h1>
          </div>
          <div className="px-4">
            <span className="font-semibold">Result</span>
            <h1 className="text-3xl">{alert}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
