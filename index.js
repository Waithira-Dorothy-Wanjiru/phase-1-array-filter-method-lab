// Code your solution here
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  