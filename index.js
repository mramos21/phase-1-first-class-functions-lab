// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(times) {
    return function (fare) {
        return fare * times;
    };
}

const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier * 2;
}

const fareTripler = function (createFareMultiplier) {
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, action) {
    return action(drivers);
}