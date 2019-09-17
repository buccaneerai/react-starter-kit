const config = function config() {
  return {
    appName: process.env.REACT_APP_NAME,
    segmentApiKey: process.env.SEGMENT_API_KEY,
    apiUrl: process.env.API_URL,
    brandColor: 'rgb(94,84,155)',
  };
};

export default config;
