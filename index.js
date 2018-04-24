function produceDrivingRange(blockRange){
  return function(beginning, ending){
    let distance = ending.split("th")[0] - beginning.split("th")[0];
    let diffToRange = distance - blockRange;

    if (diffToRange > 0){
      return `${diffToRange} blocks out of range`;
    } else {
      return `within range by ${Math.abs(diffToRange)}`;
    }
  }
}

function produceTipCalculator(tip){
  return function(amount){
    return amount * tip;
  }
}

function createDriver(){
  let driverId = 0;

  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }

}
