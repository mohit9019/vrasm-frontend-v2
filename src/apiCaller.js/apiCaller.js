import axios from "axios";
import Loader from "../html/other/Loader";
class ApiCaller {

  static userData = {};

  site = 'http://localhost:4000/v1/';
  constructor() {
  }

  // static userData= localStorage.getItem(this.userData)
  // if(userData){

  // }
  postData({ url, data }) {
    console.log(url);
    return axios.post(this.site + url, data)
      .then(data => {
        if(url == 'user/login' && data.data.status_code == '1'){
          console.log('data inserted');
          ApiCaller.userData = {...data.data.data};
          localStorage.setItem('userData', JSON.stringify(data.data.data));
        }
        return data.data
      })
      .catch(err => {
        console.log(err);
      })

  }
}
export default ApiCaller;