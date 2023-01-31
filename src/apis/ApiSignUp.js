import BaseApi from './Api';
import axios from "axios";
import {awrap} from "@babel/runtime/helpers/regeneratorRuntime";

export   class signUp {
    static async  firstStep   (data) {
        console.log(data)
        try {
            const x= await BaseApi.post('api/auth/signup/first_step', data,)
            console.log(x)
            return x
        }catch (e){
          console.log(e.message, 8888)
        }
    }
    static  secondStep =(data)=> BaseApi.post('/api/auth/signup/second_step',data);
}
