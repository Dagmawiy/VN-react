import axios from 'axios';
const create = async () => {

    try {
        return await axios.get('https://infra.devskills.app/api/accounting/transactions').then(res => {
           
            let account = res.data.map(({account_id}) => account_id);

            localStorage.setItem('account', JSON.stringify(account));
            //localStorage.setItem('transaction', JSON.stringify(res.data[res.data.length -1]));
            localStorage.setItem('transaction', JSON.stringify(res));
            
           return {success : true, data : res.data };    
        });
    } catch (error) {
        // Handle Error Here
       return {success : false, error : error.message, message : 'Someting went wrong..' };
    }
};

export default create;