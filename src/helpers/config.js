const config = function config() {
  console.log('config', process.env.REACT_APP_API_URL);
  return {
    appName: process.env.REACT_APP_NAME,
    // segmentApiKey: process.env.REACT_APP_SEGMENT_API_KEY,
    apiUrl: process.env.REACT_APP_API_URL,
    brandColor: 'rgb(94,84,155)',
  };
};

export default config;
