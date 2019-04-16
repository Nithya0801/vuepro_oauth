
var oauthServerLocation = 'http://localhost:8088'


export default{

    userRegister(data) {
        var authAxios = axios.create({
            baseURL: oauthServerLocation,
        });
        return new Promise((resolve, reject) => {
            authAxios({
                method: 'post',
                url: '/register',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    username: data.username,
                    password: data.password,
                   },
                 
            }).then((response) => {
                resolve(response);
                console.log(url);
            }).catch((err) => {
                reject(err);
            });
        });
    },

    userLogin(user) {
        var authAxios = axios.create({
            baseURL: oauthServerLocation,
        });
        return new Promise((resolve, reject) => {
            authAxios({
                method: 'post',
                url: '/oauth/token',
                headers: {
                    'Authorization': 'Basic ' + btoa("my-trusted-client:secret"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                params: {
                    'grant_type': 'password',
                    'username': user.username,
                    'password': user.password
                }
            }).then((response) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
                // localStorage.setItem('isAuthenticated', true);
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    },

    checkUser(username) {
        var authAxios = axios.create({
            baseURL: oauthServerLocation,
        });
        return new Promise((resolve, reject) => {
            authAxios({
                method: 'get',
                url: '/userCheck/'+username,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    username: username,
                },
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    // logout(accessToken) {
    //     var authAxios = axios.create({
    //         baseURL: oauthServerLocation,
    //     });
    //     return new Promise((resolve, reject) => {
    //         authAxios({
    //             method: 'post',
    //             url: 'oauth/token/revokeById/' + accessToken,
    //         }).then((response) => {
    //             axios.defaults.headers.common['Authorization'] = 'Bearer ';
    //             resolve(response);
    //         }).catch((err) => {
    //             reject(err);
    //             console.log(err);
    //         });
    //     });
    // }
}