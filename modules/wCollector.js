const { MarsWeatherApi } = require("./api_urls");
const { insertIntoMongoDB } = require("../database/database");

let weathers = [];
let saveData = async () => {
  let { data } = await MarsWeatherApi();
  await Promise.all(
    // eslint-disable-next-line array-callback-return
    await data.soles.map((item) => {
      weathers.push(loaddata(item));
    })
  );
  
  insertIntoMongoDB(weathers,"weathers");
};

function loaddata(solObject) {
  let sol = solObject.sol;
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let earthDate = solObject.terrestrial_date;
  let date = new Date(earthDate);
  let earthMonth = months[date.getUTCMonth()];
  let earthDay = date.getUTCDate();
  let earthMonthDay = earthDay + "." + earthMonth + "." + date.getUTCFullYear();
  let highCelsius = isNaN(solObject.max_temp) ? "nodata" : solObject.max_temp;
  let lowCelsius = isNaN(solObject.min_temp) ? "nodata" : solObject.min_temp;
  let highFahrenheit = isNaN(solObject.max_temp)
    ? "nodata"
    : Math.round((highCelsius * 9) / 5 + 32);
  let lowFahrenheit = isNaN(solObject.min_temp)
    ? "nodata"
    : Math.round((lowCelsius * 9) / 5 + 32);
  let pressure = isNaN(solObject.pressure) ? "nodata" : solObject.pressure;
  let sunrise = solObject.sunrise;
  let sunset = solObject.sunset;
  let season_ls = solObject.ls;
  let season = (ls) => {
    if (ls < 30) return "early autumn";
    else if (ls >= 30 && ls < 60) return "middle autumn";
    else if (ls >= 60 && ls < 90) return "late autumn";
    else if (ls >= 90 && ls < 120) return "early winter";
    else if (ls >= 120 && ls < 150) return "middle winter";
    else if (ls >= 150 && ls < 180) return "late winter";
    else if (ls >= 180 && ls < 210) return "early spring";
    else if (ls >= 210 && ls < 240) return "middle spring";
    else if (ls >= 240 && ls < 270) return "late spring";
    else if (ls >= 270 && ls < 300) return "early summer";
    else if (ls > 300 && ls <= 330) return "middle summer";
    else if (ls > 330 && ls <= 360) return "late summer";
  };
  let wDatas = {
    _id: solObject.id,
    Sol: sol,
    date: earthMonthDay,
    highF: highFahrenheit.toString(),
    lowF: lowFahrenheit.toString(),
    highC: highCelsius,
    lowC: lowCelsius,
    per: pressure,
    sr: sunrise,
    ss: sunset,
    season: season(season_ls),
  };
  return wDatas;
}

saveData();

/**/
