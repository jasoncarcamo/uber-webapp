const TripInstanceService = {
    onTrip(){
        return this.getTrip();
    },
    getTrip(){
        let tripInstance = window.localStorage.getItem("passenger-trip");

        tripInstance = JSON.parse(tripInstance);

        return tripInstance;
    },
    saveTrip(trip){
        const tripInstance = JSON.stringify(trip);

        return window.localStorage.setItem("passenger-trip", tripInstance);
    },
    removeTrip(){
        return window.localStorage.removeItem("passenger-trip");
    }
};

module.exports = TripInstanceService;