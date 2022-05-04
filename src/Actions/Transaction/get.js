import axios from 'axios';
const create = async () => {
    try {
        return await axios.get('https://infra.devskills.app/api/accounting/transactions').then(res => {
            localStorage.setItem('transaction', JSON.stringify(res.data));
            return {success : true, data : res.data } ;    
        });
    } catch (error) {
        // Handle Error Here
       return {success : false, error : error.response.data, message : 'Someting went wrong..' };
    }
};

export default create;