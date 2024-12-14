import axios from 'axios'

const channelId = '2783919';
const apiKey = 'C645SWT21H0SMLQN'; 

const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=1`;

async function fetchData() {
  try {
    const response = await axios.get(url);
    return response.data.feeds[0];
  } catch (error) {
    console.error('Error fetching data from ThingSpeak:', error.message);
  }
}

export default fetchData;
