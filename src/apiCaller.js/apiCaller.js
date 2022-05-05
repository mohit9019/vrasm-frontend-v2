import axios from "axios";
import { toast } from "react-toastify";
class ApiCaller {
  static userData = JSON.parse(localStorage.getItem('userData'));
  open_access_apis = ['template/get', 'user/login', 'user/forget_password', 'admin/get_users', 'buyer/register', 'buyer/otp'];
  site = 'http://localhost:4000/v1/';

  constructor() {
    if (localStorage.getItem('userData') && localStorage.getItem('userData').length > 0) {
      ApiCaller.userData = JSON.parse(localStorage.getItem('userData'));
    }
  }
  checkCreator(){
    if(ApiCaller.userData && ApiCaller.userData.is_creator==2){
      return true;
    }
    else
      return false;
  }

  postData({ url, data }) {
    if (localStorage.getItem('userData') && localStorage.getItem('userData').length > 0) {
      let userData = JSON.parse(localStorage.getItem('userData'));
      data['user_id'] = userData.user_id;
      data['accesstoken'] = userData.accesstoken;
    }
    console.log('open', this.open_access_apis.indexOf(url));
    if(this.open_access_apis.indexOf(url) == -1) {
      if(!data['user_id']){
        toast.error("Login to perform this action");
        return Promise.reject();
      }
    }

    return axios.post(this.site + url, data)
      .then(data => {
        // Loader.setLoader(0);
        if (url == 'user/login' && data.data.status_code == '1') {
          console.log('data inserted');
          ApiCaller.userData = { ...data.data.data };
          localStorage.setItem('userData', JSON.stringify(data.data.data));
        }
        if (data.data.status_code == '404') {
          localStorage.clear();
          // redirect to login page.
        }
        return data.data
      })
      .catch(err => {
        // Loader.setLoader(0);
        console.log(err);
      })

  }
}
export default ApiCaller;