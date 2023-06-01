import axios from "axios";

const options = {
  //url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'de9c53a4damsh6a4d399d7afc81ap154bf6jsn2d446e19b026',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${'https://youtube-v31.p.rapidapi.com'}/${url}`, 
  options);

  return data;
}