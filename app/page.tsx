/** @format */
'use client';

import { trpc } from '../server/client';
import RestaurantItem from '@/components/RestaurantItem';
import Footer from '@/components/Footer';
import Search from '@/components/Search';

export default function Home() {
	const getRestaurants = trpc.restaurant.getRestaurants.useQuery<any>();
	const createRestaurants = trpc.restaurant.createRestaurants.useMutation({
		onSettled: () => {
			getRestaurants.refetch();
		},
	});
	const addFavorite = trpc.restaurant.addFavorite.useMutation<any>({
		onSettled: () => {
			getRestaurants.refetch();
		},
	});

	const handleGenerateRestaurants = () => {
		createRestaurants.mutate();
	};

	return (
		<main className='flex h-screen flex-col items-center justify-between'>
			<div className='w-96 relative bg-white pt-6 px-4'>
				<Search />
				<div
					className='flex overflow-y-auto'
					style={{ height: 'calc(100vh - 60px)' }}
				>
					{getRestaurants?.data?.length ? (
						<div className='flex flex-col gap-4 mt-16 pb-20 overflow-x-hidden'>
							{getRestaurants.data?.map((restaurant: any) => {
								return (
									<RestaurantItem
										key={restaurant.id}
										restaurant={restaurant}
										addFavorite={addFavorite}
									/>
								);
							})}
						</div>
					) : (
						<button className='mx-auto' onClick={handleGenerateRestaurants}>
							Add Restaurant
						</button>
					)}
				</div>
				<Footer />
			</div>
		</main>
	);
}
