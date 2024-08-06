/**
 * Makes an HTTP request to the specified endpoint with the given method and data.
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {string} [method='GET'] - The HTTP method to use for the request (e.g., 'GET', 'POST').
 * @param {Object} [data=null] - The data to be sent with the request (for methods like 'POST', 'PUT').
 * @returns {Promise<Object>} - A promise that resolves to the response data in JSON format.
 * @throws {Error} - Throws an error if the HTTP request fails.
 */
export const httpRequest = async (endpoint, method = 'GET', data = null) => {
  const ep = `${process.env.url}${endpoint}`;
  const config = {
    method,
    headers: {
      'Content-type': 'application/json',
    },
  };

  if (method !== 'GET' && data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(ep, config);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `HTTP Error! 
        \nstatus: ${errorData.status}
        \nmessage: ${errorData.message || 'Unknown error'}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Error with HTTP ${method} request: ${error.message}`);
    throw error;
  }
};
