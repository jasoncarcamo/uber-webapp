const PassengerToken = {
    getToken(){
        return window.localStorage.getItem("passenger-token");
    },
    hasToken(){
        return this.getToken();
    },
    setToken(token){
        return window.localStorage.setItem("passenger-token", token);
    },
    updateToken(token){
        return this.setToken(token);
    },
    removeToken(){
        return window.localStorage.removeItem("passenger-token");
    }
};

module.exports = PassengerToken;