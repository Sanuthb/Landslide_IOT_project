import React from "react";
import SensorValues from "./SensorValues";
import { Pyramid, CloudRain, AudioWaveform } from "lucide-react";

const Hero = () => {
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
          value={4000}
          sensor_name="Soil moisture"
          color="bg-red-400"
          icon={<Pyramid size={30} />}
        />
        <SensorValues
          value={4000}
          sensor_name="Rain"
          color="bg-green-400"
          icon={<CloudRain size={30} />}
        />
        <SensorValues
          value={4000}
          sensor_name="Vibration"
          color="bg-yellow-400"
          icon={<AudioWaveform size={30} />}
        />
      </div>
      <div className="bg-white w-full p-2 flex flex-col gap-5">
        <span className="font-semibold">Indication</span>
        <div className="w-full flex justify-between">
          <div className="p-2 flex flex-col gap-5">
            <h1 className="text-xl">Soil Alert:High</h1>
            <h1 className="text-xl">Rainfall Alert:High</h1>
            <h1 className="text-xl">Vibration Alert:High</h1>
          </div>
          <div className="px-4 ">
            <span className="font-semibold">Result</span>
            <h1 className="text-3xl">Landslide Alert need to alert people</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
