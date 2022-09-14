const axios = require("axios");
const fetch = async () => {
    const url = "https://example.com"
    try {
      const { data } = await axios.get(url, {
        headers,
      });
      console.log(JSON.stringify(data, null, 2));
    } catch (e) {
      console.error(JSON.stringify(e, null, 2));
    }
};