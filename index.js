function findMatching(drivers, name){
  return drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, partOfName){
return drivers.filter(function(driver) {return driver[0..2] === partOfName[0..2];
});
}
