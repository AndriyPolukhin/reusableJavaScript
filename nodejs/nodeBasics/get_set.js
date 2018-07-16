class Book {
constructor(author) {
  this._author = author;
  }
get writer() {
  return this._author;
  }
set writer(updatedAuthor) {
  this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
lol.writer
lol.writer = 'wut';
lol.wirter
lol.writer
function makeClass() {
"use strict";
class Thermostat{
  constructor(temperature) {
    this.temperature = temperature;
    }
  get convertInC() {
    let c = 5/9 * (temperature - 32);
    return c;
    }
  set justSetC(temperatureUpdated) {
    this.temperature = temperatureUpdated;
    }
  }
return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
