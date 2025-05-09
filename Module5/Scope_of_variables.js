// Global variables
let partyDate = "December 25, 2023";
let numberOfGuests = 50;
let venue = "The Grand Winter Ballroom";

function prepareParty() {
	let partyDateMessage = `Party Date: ${partyDate}`;
	let numberOfGuestsMessage = `Number of Guests: ${numberOfGuests}`;
	let venueMessage = `Venue: ${venue}`;

return {
		partyDateMessage,
		numberOfGuestsMessage,
		venueMessage
	};
}

function createInvitations(name) {
	let invitationGreeting = `Dear ${name}, you're invited!`;
	let invitationMessage = `${invitationGreeting} Join us for an unforgettable night on ${partyDate} at ${venue} with ${numberOfGuests} other esteemed guests.`;

	return invitationMessage;
}

// New global variable for Task 3
const guestList = [{
		name: "Steve",
		willDance: true,
		isVip: true
	},
	{
		name: "Lucy",
		willDance: false,
		isVip: false
	},
	{
		name: "John",
		willDance: true,
		isVip: true
	},
	{
		name: "Nancy",
		willDance: true,
		isVip: false
	},
	{
		name: "Priya",
		willDance: false,
		isVip: true
	},
	{
		name: "Asif",
		willDance: true,
		isVip: false
	},
	{
		name: "Esther",
		willDance: false,
		isVip: true
	},
	{
		name: "James",
		willDance: true,
		isVip: false
	},
	{
		name: "Samantha",
		willDance: true,
		isVip: true
	},
	{
		name: "Robert",
		willDance: false,
		isVip: false
	},
];

function managePartyZones() {
	const diningArea = "Italian Bistro";
	let danceFloor = "Winter Wonderland";
	let passesAndCoupons = [];

	for(let i = 0; i < guestList.length; i++) {
		const {
			name,
			willDance
		} = guestList[i];
		const lunchCoupon = `Lunch Coupon: ${name}, valid at ${diningArea}`;
		let dancePass;
		switch(willDance) {
			case true:
				dancePass = `Hey ${name}, we're excited to see you dance at ${danceFloor}`;
				break;
			default:
				dancePass = null;
				break;
		}
		passesAndCoupons.push({
			name,
			lunchCoupon,
			dancePass
		});
	}

	return {
		diningArea,
		danceFloor,
		passesAndCoupons
	};
}

// Your next task:
function vipSection() {
	const vipGuests = guestList.filter((guest) => guest.isVip);

	function grantAccess(guest) {
		/* Use the 'map' function to map over the vipGuests and generate a 
		pass that includes the name of the guest in the message
		The value returned from this function should be an array of objects. 
		Each object should be of the form: 
		{
		  name: "name of the guest", 
		  vipPass:"Message that contains the guest name and a warm welcome message"
		}
		*/
		if (guest){
			return {
				name: guest.name,
				vipPass: `Welcome ${guest.name}, we are glad to have you here. This is your vipPass.`,
			};
		};
				 
		const vipPasses = vipGuests.map(grantAccess);
		return vipPasses;

	};

	return grantAccess;
}

// Call the vipSection function and store the result in 'grantVipAccess'
const grantVipAccess = vipSection();

// Call the 'grantVipAccess' function and store the results in 'guestVipPasses'
const guestVipPasses = grantVipAccess();

// Log the 'guestVipPasses' to see the VIP passes
console.log(guestVipPasses);

// Don’t change this line
module.exports = {
	guestList,
	guestVipPasses,
};
