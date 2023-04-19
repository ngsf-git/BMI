//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

//export default function Home() {
//  return (
//   <main className="flex min-h-screen flex-col items-center justify-between p-24">
//      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
//      </div>

//      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"></div>

//      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
//    </main>
//  );
//}

import { getBMI } from "@/src/bmi";
import { valueGetters } from "@mantine/core/lib/Box/style-system-props/value-getters/value-getters";
import { NextPage } from "next";
import { Container } from "postcss";
import { allowedNodeEnvironmentFlags } from "process";
import { useState } from "react";



const Home: NextPage = () => {

  //ReactHooks　状態を決める　初期値0 不要？
  const[weight,setWeight] = useState(0);
  const[height,setHeight] = useState(0);

  
  
  return (
    <main className="container mx-auto">
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
        <div className="w-96 rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold">BMI Calculator</h2>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700">
              体重 (kg)
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              className="mt-2 w-full rounded border border-gray-300 p-2"
              //入力が変化したら状態に反映させる
              onChange={(event) => setWeight(event.target.valueAsNumber)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="height" className="block text-gray-700">
              身長 (cm)
            </label>
            <input
              id="height"
              type="number"
              value={height}
              className="mt-2 w-full rounded border border-gray-300 p-2"
              //入力が変化したら状態に反映させる
              onChange={(event) => setHeight(event.target.valueAsNumber)}
              />
              
          </div>
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          //onClick={}  //event
            >
            BMI を計算する              
          </button>


         

          
          

          
        </div>
        
      </div>
      
    </main>
  );
};

export default Home;

