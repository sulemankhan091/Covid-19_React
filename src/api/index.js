import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// fetchData from url and destructure it to use it
export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.error(error);
  }
};

// fetch dailyreport with date

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modefiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modefiedData;
  } catch (error) {
    console.error(error);
  }
};
