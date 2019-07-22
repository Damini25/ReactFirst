import axios from 'axios';

export const fetchProducts = () => {
    return axios.get(process.env.PUBLIC_URL+'/assets/mockJson/products.json');
}
export const fetchProductByID = (id) => {
    return axios.get(process.env.PUBLIC_URL+'/assets/mockJson/products.json');
}