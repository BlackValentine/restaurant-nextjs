/** @format */

import Image from 'next/image';
import React from 'react';

type Props = {};

export default function Search({}: Props) {
	return (
		<div className='relative w-full'>
			<input
				type='text'
				placeholder='맛집 이름을 검색해보세요'
				className='w-full py-2 pl-8 shadow-lg rounded-lg outline-none text-sm bg-gray-50 text-gray-400'
			/>
			<Image
				src={'/icons/search.svg'}
				width={18}
				height={18}
				alt='search'
				className='absolute top-1/2 -translate-y-1/2 left-2'
			/>
		</div>
	);
}
