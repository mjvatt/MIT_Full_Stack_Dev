const findProduct = (cartItem, productName) => (productName===cartItem.product.name);

const displayItemInfo = (item, index) => 
	console.log(`${index+1} ${item.product.name} ${item.product.price} ${item.quantity}`);

const includeItemTotal = (currentCartTotal, cartItem) => {
	currentCartTotal=cartItem.quantity*cartItem.product.price+currentCartTotal;
	return currentCartTotal;
}

// Don't change this line:
module.exports = {
	displayItemInfo
};
