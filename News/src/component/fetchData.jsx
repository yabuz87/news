import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=dd8e0d11dff34c5aba5d5d5ec5d3e0de`);

    console.log(response.data);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('Error data:', error.response.data);
      console.log('Error status:', error.response.status);
      console.log('Error headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error message:', error.message);
    }
    console.log('Error config:', error.config);
  }
}

 export default fetchData();
