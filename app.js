import axios from 'axios';

const customAxios = axios.create({
    baseURL: `https://example.com/api`,
    timeout: 10000, 
    headers: { 'api-key': 'JJA_JJA' }
});

const getToken = () => {
    return {
        accessToken: 'zxczxcxz'
    };
};
// Step-2: Create request, response & error handlers

/**
 * @params { Request } request
 */
const requestHandler = request => {
    const accessToken = getToken().accessToken;
    request.headers.Authorization = `Bearer ${accessToken}`;
  
    return request;
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
customAxios.interceptors.request.use(
    (request) => requestHandler(request)
);

(async () => {
    try {
        const response = await customAxios.get('http://localhost:3000/hello');
        console.log(response.data)
    } catch(err) {
    }
}) ();

// // Step-4: Export the newly created Axios instance to be used in different locations.
// export default customAxios;