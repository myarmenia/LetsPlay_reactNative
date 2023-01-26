import BaseApi from './Api';

export class signUp {
    static firstStep (data) {
        return BaseApi.post('/api/auth/signup/first_step', data)
    }
    static  secondStep =(data)=> BaseApi.post('/api/auth/signup/second_step',data);
}
