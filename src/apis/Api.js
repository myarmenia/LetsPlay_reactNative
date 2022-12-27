import axios from "axios";

const base = axios.create(
    {
        // Test
        baseURL: "https://jsonplaceholder.typicode.com/comments"
    }
)


// Test
// export class ApiUsers {
//     static getAllUsers =()=> base.get('');
//     static getUsersId = (id) => base(id)
// }
// Test

export class  ApiTest {
    static  getCommentsTest =()=> base();
}
