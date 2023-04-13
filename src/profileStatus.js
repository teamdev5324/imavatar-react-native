import axios from 'axios';
import {partnerBaseUrl} from './apiService';

const profileStatus = token => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${partnerBaseUrl}/partner/profile`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    axios(config).then(function (res) {
      res = res.data;
      // console.log(res);
      if (res.status === 'SUCCESS') {
        // sessionStorage.setItem('profileData', JSON.stringify(res.results));
        resolve({
          status: 200,
          verificationStatus: res.results.verificationStatus,
        });
        console.log(res);
      }
    });
  });
};

export default profileStatus;
