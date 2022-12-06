function distanceFromHqInBlocks(someValue) {
  return Math.abs(42 - someValue);
}


function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  let result;
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    result = 0;
  } else if (distance > 400 && distance < 2000) {
    result = (distance - 400) * 0.02;
  } else if (distance >= 2000 && distance < 2500) {
    result = 25;
  } else {
    result = 'cannot travel that far';
  }
  return result;
}