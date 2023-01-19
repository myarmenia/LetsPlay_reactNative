import axios from "axios";

const base = axios.create(
    {
        baseURL: "http://to-play.ru",
        headers: {
            'Content-Type': 'application/json',
        },
    }
)

export default base;

// Test
// export class ApiUsers {
//     static getAllUsers =()=> base.get('');
//     static getUsersId = (id) => base(id)
// }
// Test

// export class  ApiTest {
//     static  getCommentsTest =()=> base();
// }
