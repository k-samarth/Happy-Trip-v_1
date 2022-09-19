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
  constructor(s_no,name, age,gender,seat_no,status) {
    this.s_no=s_no;
    this.name = name;
    this.age=age;
    this.gender = gender;
    this.seat_no=seat_no;
    this.status = status;
    
  }
}
class Booking_details{
  constructor(
    Transaction_id,
    From ,
    Airline,
    FlightNoAndName,
    To,
    Date,
    Schedule,
    BoardingPoint,
    DateofBoarding,
    Duration
  ) {
    this.Transaction_id=Transaction_id;
    this.From=From;
    this.Airline=Airline;
    this.FlightNoAndName=FlightNoAndName;
    this.To=To;
    this.Date=Date;
    this.Schedule=Schedule;
    this.BoardingPoint=BoardingPoint;
    this.DateofBoarding=DateofBoarding;
    this.Duration=Duration;
  }
}

class PriceDetails{
  constructor(
    Fare,
    AirlineFee,
    Cleartrip_fee,
    Total
    
  ) {
    this.Fare=Fare;
    this.AirlineFee=AirlineFee;
    this.Cleartrip_fee=Cleartrip_fee;
    this.Total=this.Fare+this.AirlineFee+this.Cleartrip_fee;
    
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
export {Flight};
export {FlightSchedule};
export {Passanger};
export {Booking_details};
export {PriceDetails};