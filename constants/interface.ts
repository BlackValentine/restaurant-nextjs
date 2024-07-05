/** @format */

import { STORE_CATEGORY } from ".";

export interface IRestaurant {
	id: number;
	name: string;
	price_range: string;
	isFavorite: boolean;
	rating: string;
	rating_count: number;
	category: STORE_CATEGORY;
	city: string;
	desc: string;
	featured: any;
	images: IImage[];
}

export interface IImage {
	id: number;
	url: string;
	restaurantId: number;
}
