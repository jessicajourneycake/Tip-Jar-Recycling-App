import { create } from 'apisauce';
const apiClient = create ({
    baseURL: 'http://10.0.0.242:9000/api',
    headers: {Accept: 'application/json'}
});

export default apiClient;