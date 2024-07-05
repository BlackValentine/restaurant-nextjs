/** @format */

import { z } from 'zod';
import { procedure, router } from '../trpc';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const restaurantRouter = router({
	getRestaurants: procedure.query(async () => {
		return await prisma.restaurant.findMany({
			include: {
				images: true,
			},
			orderBy: {
				id: 'asc',
			},
		});
	}),
	createRestaurants: procedure.mutation(async () => {
		const restaurantDatas = [
			{
				rating: 4.2,
				rating_count: 139,
				category: 'YAKITORI',
				city: 'osaka',
				desc: '최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는',
				name: '카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야',
				price_range: '3~5',
				featured: {
					text: '나카노시마×야키토리 상위 맛집',
					icon: 'stars-02',
				},
				isFavorite: true,
				images: {
					create: [
						{
							url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
					],
				},
			},
			{
				rating: 4.5,
				rating_count: 200,
				category: 'SUSHI',
				city: 'tokyo',
				desc: '신선한 해산물과 정통 스시를 제공하는',
				images: {
					create: [
						{
							url: 'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
					],
				},
				name: '스시 긴자 이시카와',
				price_range: '4~6',
				featured: {
					text: '도쿄의 상위 스시 맛집',
					icon: 'stars-02',
				},
				isFavorite: false,
			},
			{
				rating: 4.7,
				rating_count: 180,
				category: 'RAMEN',
				city: 'kyoto',
				desc: '진한 국물과 다양한 토핑을 자랑하는',
				images: {
					create: [
						{
							url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
					],
				},
				name: '라멘 이치란',
				price_range: '2~4',
				featured: {
					text: '교토의 라멘 명소',
					icon: 'stars-02',
				},
				isFavorite: true,
			},
			{
				rating: 4.3,
				rating_count: 220,
				category: 'TEMPURA',
				city: 'nagoya',
				desc: '바삭한 텐푸라를 맛볼 수 있는',
				images: {
					create: [
						{
							url: 'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
					],
				},
				name: '텐푸라 마츠야',
				price_range: '3~5',
				featured: {
					text: '나고야 최고의 텐푸라집',
					icon: 'stars-02',
				},
				isFavorite: false,
			},
			{
				rating: 4.6,
				rating_count: 190,
				category: 'SOBA',
				city: 'fukuoka',
				desc: '쫄깃한 면발과 진한 육수를 자랑하는',
				images: {
					create: [
						{
							url: 'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
					],
				},
				name: '우동 타로',
				price_range: '2~4',
				featured: {
					text: '후쿠오카 우동 맛집',
					icon: 'stars-02',
				},
				isFavorite: true,
			},
			{
				rating: 4.1,
				rating_count: 160,
				category: 'YAKITORI',
				city: 'osaka',
				desc: '맛있고 저렴한 야키토리 전문점',
				images: {
					create: [
						{
							url: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
					],
				},
				name: '야키토리 하치베',
				price_range: '1~3',
				featured: {
					text: '오사카 야키토리 숨은 맛집',
					icon: 'stars-02',
				},
				isFavorite: false,
			},
			{
				rating: 4.8,
				rating_count: 250,
				category: 'SUSHI',
				city: 'sapporo',
				desc: '신선한 해산물로 만든 정통 스시를 즐길 수 있는',
				images: {
					create: [
						{
							url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
					],
				},
				name: '스시 사토',
				price_range: '4~6',
				featured: {
					text: '삿포로 스시 맛집',
					icon: 'stars-02',
				},
				isFavorite: true,
			},
			{
				rating: 4.4,
				rating_count: 170,
				category: 'RAMEN',
				city: 'hiroshima',
				desc: '깊은 맛의 국물과 탱탱한 면발을 자랑하는',
				images: {
					create: [
						{
							url: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
					],
				},
				name: '라멘 타츠야',
				price_range: '2~4',
				featured: {
					text: '히로시마 라멘 추천',
					icon: 'stars-02',
				},
				isFavorite: false,
			},
			{
				rating: 4.9,
				rating_count: 300,
				category: 'TEMPURA',
				city: 'yokohama',
				desc: '고급스러운 텐푸라를 제공하는',
				images: {
					create: [
						{
							url: 'https://images.unsplash.com/photo-1610399220621-38b3599b57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1610399220621-38b3599b57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1610399220621-38b3599b57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
					],
				},
				name: '텐푸라 야마구치',
				price_range: '5~7',
				featured: {
					text: '요코하마 텐푸라 추천',
					icon: 'stars-02',
				},
				isFavorite: true,
			},
			{
				rating: 4.0,
				rating_count: 150,
				category: 'SOBA',
				city: 'kobe',
				desc: '담백한 국물과 쫄깃한 면발이 일품인',
				images: {
					create: [
						{
							url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
						{
							url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
						},
					],
				},
				name: '우동 가게야마',
				price_range: '2~4',
				featured: {
					text: '고베 우동 맛집',
					icon: 'stars-02',
				},
				isFavorite: false,
			},
		];

		for (const restaurantData of restaurantDatas) {
			const restaurant = await prisma.restaurant.create({
				data: restaurantData,
				include: {
					images: true,
				},
			});
			console.log('Created restaurant:', restaurant);
		}
	}),
	addFavorite: procedure
		.input(z.object({ restaurantId: z.number() }))
		.mutation(async (opts) => {
			const { input } = opts;
			const restaurant = await prisma.restaurant.findUnique({
				where: { id: input.restaurantId },
			});

			if (!restaurant) {
				console.error(`User with id ${input.restaurantId} not found`);
				return null;
			}
			return await prisma.restaurant.update({
				where: { id: input.restaurantId },
				data: { isFavorite: !restaurant?.isFavorite },
			});
		}),
});

export type RestaurantRouter = typeof restaurantRouter;
