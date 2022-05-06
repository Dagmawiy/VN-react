import axios from 'axios';
const create = async (data) => {
    try {
        return await axios.post('https://infra.devskills.app/api/accounting/transactions', data).then(res => {
            return {success : true, data : res.data } ;    
        });
    } catch (error) {
        // Handle Error Here
       return {success : false, error : error.response, message : 'Someting went wrong..' };
    }
};

export default create;