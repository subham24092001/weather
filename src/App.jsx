import { useEffect, useState } from "react";
import Highlight from "./components/highlight";
import Temp from "./components/temp";


function App() {
  const [city, setCity] = useState("Mumbai");
  const apiKey =  "4310eae60340456e919110436242503"
  const [weathdata, setWeathdata] = useState(null);
  const [cityExist, setCityExist] = useState(true);

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  async function fetchData() {
    try {
      const data = await fetch(apiUrl);
      if (!data.ok) {
        throw new Error("Somthing Went Wrong!!");
      }
      const res = await data.json();
      setWeathdata(res);
      setCityExist(true);
    } catch (e) {
      console.log(e);
      setCityExist(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div className="bg-gray-500 min-h-screen flex flex-col md:flex-row justify-center items-start">
      <div className="bg-blue-200 mt-10 md:mt-0 w-full md:w-1/3">
        {weathdata && (
          <Temp
            setCity={setCity}
            cityExist={cityExist}
            stats={{
              temp: weathdata?.current?.temp_c,
              condition: weathdata?.current?.condition?.text,
              isDay: weathdata?.current?.is_day,
              location: weathdata?.location?.name,
              time: weathdata?.location?.localtime,
            }}
          />
        )}

        {!cityExist && <div className="text-red-400 mt-2">City Not found</div>}
      </div>
      <div className="mt-10 w-full md:w-2/3 px-4 grid grid-cols-2 gap-4">
        <h2 className="text-slate-200 text-2xl col-span-2">
          Today's Highlight
        </h2>
        {weathdata && (
          <>
            <Highlight
              cityExist={cityExist}
              stats={{
                title: "Wind Status",
                value: weathdata?.current?.wind_mph,
                unit: "mph",
                direction: weathdata?.current?.wind_dir,
              }}
            />
            <Highlight
              cityExist={cityExist}
              stats={{
                title: "Humidity",
                value: weathdata?.current?.humidity,
                unit: "%",
              }}
            />
            <Highlight
              cityExist={cityExist}
              stats={{
                title: "Visibility",
                value: weathdata?.current?.vis_miles,
                unit: "miles",
              }}
            />
            <Highlight
              cityExist={cityExist}
              stats={{
                title: "Air Pressure",
                value: weathdata?.current?.pressure_mb,
                unit: "mb",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
