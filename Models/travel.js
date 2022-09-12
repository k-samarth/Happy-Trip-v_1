class City {
  constructor(id, code, name) {
    this.id = id;
    this.code = code;
    this.name = name;
  }
}

class Route
{
    constructor(fromCity, toCity, distance)
    {
        this.fromCity = fromCity;
        this.toCity = toCity;
        this.distance = distance;
    }
}

export {City}