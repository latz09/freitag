import { useState } from 'react';
import {motion } from 'framer-motion';

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const reviews = [
	{
		Author: 'John Doe',
		Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		Author: 'Jane Doe',
		Text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		Author: 'John Smith',
		Text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
];
const Reviews = () => {
	// Keep track of the current review
	const [currentIndex, setCurrentIndex] = useState(0);

	// Function to go to the previous review
	const prevReview = () => {
		setCurrentIndex((oldIndex) => {
			let newIndex = oldIndex - 1;
			if (newIndex < 0) newIndex = reviews.length - 1; // loop back to the last review if we're at the start
			return newIndex;
		});
	};

	// Function to go to the next review
	const nextReview = () => {
		setCurrentIndex((oldIndex) => {
			let newIndex = oldIndex + 1;
			if (newIndex === reviews.length) newIndex = 0; // loop back to the first review if we're at the end
			return newIndex;
		});
	};

	return (
        <div className="h-[40vh] mb-16 sm:mb-0">
		<div className='px-2 sm:w-3/4 xl:w-1/3 mx-auto grid gap-6 place-items-center'>
			<div className='flex justify-between w-3/4   text-4xl text-primary'>
				<button onClick={prevReview}><BsFillArrowLeftCircleFill /></button>
				<button onClick={nextReview}><BsFillArrowRightCircleFill /></button>
			</div>
			<motion.div
				className='flex flex-col gap-2 font-questrial tracking-wider  py-8 px-4 shadow'
				initial={{ opacity: 0, scale: .9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.1 }}
				key={currentIndex}
			>
				<h2 className="font-bold font-oswald text-dark/90">{reviews[currentIndex].Author}</h2>
				<p className='self-center text-justify font-bold text-dark/70'>{reviews[currentIndex].Text}</p>
			</motion.div>
		</div></div>
	);
};

export default Reviews;
