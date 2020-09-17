const car = {
  speed:0,
  minutes:0,
  distance:0,

  // Complete here
  start: function () {
    this.speed = 0;
    this.minutes = 0;
    this.distance = 0;
    return this;
  },  
  changeSpeed : function (newSpeed) {
    this.speed = newSpeed;
    return this;
    
  },
  drive: function (newMinutes) {
    this.minutes;
    this.distance = (this.speed * newMinutes) / 60 + this.distance;
    return this;
  },
  showDistance: function () {
    console.log(`${this.distance} Km`);
    
    return this;
  
  }
};

module.exports = car;
