/** @format */

import { STORE_CATEGORY, textByStoreCategory } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IImage, IRestaurant } from '@/constants/interface';
import { HeartIcon } from './icons/HeartIcon';

type Props = {
	restaurant: IRestaurant;
	addFavorite: any;
};

export default function RestaurantItem({ restaurant, addFavorite }: Props) {
	const category: STORE_CATEGORY = restaurant.category;

	const handleAddFavourite = (restaurantId: number) => {
		addFavorite.mutate({
			restaurantId,
		});
	};

	return (
		<div>
			<div className='relative'>
				<Swiper
					pagination={true}
					modules={[Pagination]}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{restaurant.images.map((image: IImage, index: number) => {
						return (
							<SwiperSlide key={index}>
								<Image
									src={image.url}
									width={358}
									height={200}
									alt='image'
									className='rounded-2xl aspect-[358/200] object-cover'
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div
					className='absolute right-2 top-2 w-9 h-9 flex bg-[#ffffff40] rounded-full z-50 cursor-pointer'
					onClick={() => handleAddFavourite(restaurant.id)}
				>
					<HeartIcon
						className={`m-auto ${
							restaurant.isFavorite ? 'text-burnt-orange' : 'text-slate-gray'
						}`}
					/>
				</div>
			</div>
			<div className='flex items-center gap-1 mt-3'>
				<Image
					src={'/icons/plus-star.svg'}
					width={10}
					height={10}
					alt='plus-star'
				/>
				<span className='text-xs text-burnt-orange'>
					{restaurant.featured.text}
				</span>
			</div>
			<div className='flex items-center gap-1 mt-1 text-black-river-falls'>
				<span className='font-semibold flex-1 truncate'>{restaurant.name}</span>
				<div className='flex items-center'>
					<Image
						src={'/icons/star.svg'}
						width={16}
						height={16}
						alt='plus-star'
					/>
					<span className='text-sm'>
						{restaurant.rating}({restaurant.rating_count})
					</span>
				</div>
			</div>
			<p className='text-dark-grayish-blue text-sm truncate'>
				{restaurant.desc}
			</p>
			<p className='text-dark-grayish-blue text-sm truncate'>
				오사카 나카노시마 · {textByStoreCategory[category]} ·{' '}
				{restaurant.price_range}만원
			</p>
		</div>
	);
}
