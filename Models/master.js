class Flight {
  constructor(id, number, name, flightcapacity = [], airline) {
    this.id = id;
    this.number = number;
    this.name = name;
    this.flightcapacity = flightcapacity;
    this.airline = airline;
  }
}

class FlightCapacity {
  constructor(name, numberofseats) {
    this.name = name;
    this.numberofseats = numberofseats;
  }
}

// Class creation
class Airline {
  constructor(id, name, logo, code, flights = []) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.code = code;
    this.flights = flights;
  }
}

// Object creation without class
// var airline = {
//     id: 0,
//     name: "Indigo",
//     logo: "https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png",
//     code: "IND123"
// };

// Function class
// function Airline(id,name,logo,code)
// {
//     var legalName = null; //This is a local variable that is not attached to object
//     this.id= id;
//     this.name = name;
//     this.logo = logo;
//     this.code = code;
//     this.getRoutes = function(){
//         console.log("These are the Routes for Airline");
//         var routeVar; //This is also local a local variable to the function
//     }
// };

class FlightSchedule {
  constructor(
    flight,
    airline,
    date,
    time,
    duration,
    seatsAvailability,
    fromCity,
    toCity,
    routes = [],
    price
  ) {
    this.flight = flight;
    this.airline = airline;
    this.date = date;
    this.time = time;
    this.duration = duration;
    this.seatsAvailability = seatsAvailability;
    this.fromCity = fromCity;
    this.toCity = toCity;
    this.routes = routes;
    this.price = price;
  }
}

class Passanger {
  constructor(name, gender, dob, mobileNumber) {
    this.name = name;
    this.gender = gender;
    this.dob = dob;
    this.mobileNumber = mobileNumber;
  }
}

class Booking {
  constructor(
    schedule,
    passangers = [],
    id,
    bookingDateTime,
    termsAndCondition,
    price,
    paymentInfo
  ) {
    this.schedule = schedule;
    this.passangers = passangers;
    this.id = id;
    this.bookingDateTime = bookingDateTime;
    this.termsAndCondition = termsAndCondition;
    this.price = price;
    this.paymentInfo = paymentInfo;
  }
}

class PaymentInfo {
  constructor(
    paymentId,
    paymentMode,
    amount,
    transactionNumber,
    paymentStatus,
    paymentDateTime
  ) {
    this.paymentId = paymentId;
    this.paymentMode = paymentMode;
    this.amount = amount;
    this.paymentStatus = paymentStatus;
    this.transactionNumber = transactionNumber;
    this.paymentDateTime = paymentDateTime;
  }
}

var flightcapacity = new FlightCapacity("IndigoMglrSpl", 10);
let flightcapacities = {
  businessclass: {
    BusinessClass: 10,
  },
  economyclass: {
    "Economy Class": 20,
  },
};


var airline = new Airline(
  1,
  "Indigo",
  "https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png",
  "IN123",
  { businessclass: 2 }
);

var flight = new Flight(1, "IN123", "IndigoMglrSpl", flightcapacities, airline);
airline.flights = flight;

console.log(flight.airline);
// airline.getRoutes();


// Exports
export {FlightSchedule};
export {Passanger};