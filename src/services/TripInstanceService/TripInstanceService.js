const TripInstanceService = {
    onTrip(){
        return this.getTrip();
    },
    getTrip(){
        const tripInstance = window.localStorage.getItem("passenger-trip");
        
        return tripInstance;
    },
    saveTrip(trip){
        const tripInstance = JSON.stringify(trip);

        return window.localStorage.setItem("passenger-trip", tripInstance);
    },
    removeTrip(){
        return window.localStorage.getItem("passenger-trip");
    }
};

module.exports = TripInstanceService;