export const getServerUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api-xrjh.onrender.com';
  } else {
    return 'http://localhost:4000';
  }
};
