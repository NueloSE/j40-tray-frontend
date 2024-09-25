// Defines the structure of a User object with essential fields: 
// _id (unique identifier), email, name, address, and phoneNumber.

export type User = {
	_id: string;
	email: string;
	name: string;
	address: string;
	phoneNumber: string;
};

export type MenuItem = {
	_id: string;
	name: string;
	price: number;
}

export type Restaurant = {
	_id: string;
	user: string;
	restaurantName: string;
	city: string;
	region: string;
	deliveryPrice: number;
	estimatedDeliveryTime: number;
	cuisines: string[];
	menuItems: MenuItem[];
	imageUrl: string;
	lastUpdate: string;
}
