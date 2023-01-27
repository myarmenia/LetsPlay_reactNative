import BaseApi from './Api';
import axios from "axios";
export class signUp {
    static firstStep  (data) {


        var data = JSON.stringify({
            'email': 'tesdsfzxfdsdasddat@mail.ru',
            'name': 'Kadfds',
            'surname': 'OBrien'
        });

        var config = {
            method: 'post',
            'accept': '*/*',
            url: 'http://to-play.ru/api/auth/signup/first_step',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                body:data
            },
        };

       // return axios(config).then(dat=>console.log(dat))

        // return BaseApi.post('api/auth/signup/first_step', JSON.stringify(data))
    }
    static  secondStep =(data)=> BaseApi.post('/api/auth/signup/second_step',data);
}
