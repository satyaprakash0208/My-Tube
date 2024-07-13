import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
//   method: "GET",
//   url: `${BASE_URL}/search`,
  params: {
    // channelId: "UCBVjMGOIkavEAhyqpxJ73Dw",
    // part: "snippet,id",
    // order: "date",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};


// this is also right 

// export const fetchFromAPI = async (url) => {
//     try {
//     //   const response = await axios.request(options);
//       const response = await axios.get(`${BASE_URL}/${url}`, options);
//       return response.data.items;
//     } catch (error) {
//       console.error("Error fetching data from API:", error);
//       return [];
//     }
//   };


// both are right
export const fetchFromAPI = async (url) => {
    //  const response = await axios.get(`${BASE_URL}/${url}`, options);
    //   return response.data;

    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  };
