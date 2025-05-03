function restockShelves(storageItemCount, restockPerTrip) {
  let tripNumber = 0;
  let restockInfo = [];

  // Todo: Update the below while loop condition so that it loops until 
  // the value of `storageItemCount` is greater than `0` (i.e. `storageItemCount > 0`).
  while (storageItemCount > 0) {
    let itemsToRestock = Math.min(storageItemCount, restockPerTrip);
    storageItemCount -= itemsToRestock;
    tripNumber++;

    // Todo: Create a variable named `tripInfo` which stores the trip information in this format:
    // "Trip {tripNumber}: Restocked {itemsToRestock} items."
    let tripInfo = 'Trip ' + tripNumber + ': ' + 'Restocked ' + itemsToRestock + ' items.'
    // restockInfo += tripInfo;
    restockInfo.push(tripInfo);
  }

  return restockInfo;
}

// Don't change this line
if(typeof module != 'undefined') {
  module.exports = { restockShelves };
}
