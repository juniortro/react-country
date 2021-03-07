const axios = require('axios');

export async function getAllCountry(url: string) {
  try {
    const response = await axios.get(url)
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}

