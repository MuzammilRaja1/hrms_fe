export const getAPIUrl = (url, qParams) => {
  if (!url) return "";
  if (!qParams) return url;

  let queryString = "";
  for (const key in qParams) {
    const value = qParams[key];
    if (value) {
      queryString += `${queryString ? "&" : ""}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }
  }
  const apiURL = `${url}?${queryString}`;
  return apiURL;
};