const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total,journey) => {
   return total + journey.distance;
  }, 0);

};

//Loop method:

Traveller.prototype.getUniqueModesOfTransport = function () {
  let uniqueArray = []
  let newArray = this.journeys.map(journey => journey.transport);
  for(let item of newArray){
    if (uniqueArray.includes(item) === false){
    uniqueArray.push(item);
    }
  }
  return uniqueArray;
};

//Set method:

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = this.journeys.map(journey => journey.transport );
  const setOfTransports = new Set(transports)
  let uniqueTransport = Array.from(setOfTransports)
  return uniqueTransport;
};




module.exports = Traveller;
