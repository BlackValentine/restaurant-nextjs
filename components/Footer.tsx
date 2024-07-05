/** @format */

import React, { useState } from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { MessageIcon } from './icons/MessageIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { MenuIcon } from './icons/MenuIcon';
import { SearchIcon } from './icons/SearchIcon';

export default function Footer() {
	const [currentTab, setCurrentTab] = useState<number>(1);
	const footerList = [
		{
			icon: <HomeIcon />,
			text: '홈',
		},
		{
			icon: <SearchIcon />,
			text: '검색',
		},
		{
			icon: <MessageIcon />,
			text: '피드',
		},
		{
			icon: <CalendarIcon />,
			text: '내 예약',
		},
		{
			icon: <MenuIcon />,
			text: '메뉴',
		},
	];

	const handleNavigate = (index: number) => {
		setCurrentTab(index);
	};

	return (
		<footer className='absolute left-0 right-0 bottom-0 grid grid-cols-5 py-2 bg-white border-t border-gray-500 border-solid z-50'>
			{footerList.map((item, index) => {
				return (
					<div
						key={index}
						className={`flex flex-col items-center justify-end gap-1 cursor-pointer ${
							currentTab === index ? 'text-burnt-orange' : 'text-slate-gray'
						}`}
						onClick={() => handleNavigate(index)}
					>
						{item.icon}
						<span className='text-[10px]'>{item.text}</span>
					</div>
				);
			})}
		</footer>
	);
}
