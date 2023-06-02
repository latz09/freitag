import { useState } from 'react';
import { motion } from 'framer-motion';

import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const reviews = [
	{
		Author: 'Kathy R',
		Text: 'Jay did an excellent job of a minor home repair and even moving a heavy safe! He is very personable, professional, fast, clean with great detail to his work. I could go on! He is a local jem and I am glad to have him in my area! Will definitely use him again',
	},
	{
		Author: 'Melinda D',
		Text: 'Jay did a fantastic job on a pretty big interior painting and wall/ceiling repair job. The work included some very challenging areas to repair and paint with high and hard-to-reach sections. I was amazed at the quality and precision of his work. In addition, he worked very quickly, offered very reasonable pricing, was always responsive in communication, and was incredibly respectful and trustworthy in our space. I highly recommend his services',
	},
	{
		Author: 'Hilde S',
		Text: 'Jay replaced interior and exterior doors, replaced molding, and corrected an attic access stairway that had been installed incorrectly by someone else. Super professional job; quick, clean and highly detail oriented. Easy to communicate with, on time and definitely worth it. Highly recommended and I’ll continue to hire him for my projects.',
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
		<div className='my-16 py-4  grid place-items-cente'>
			<div className='px-2 sm:w-3/4 xl:w-1/3 mx-auto flex flex-col gap-4 place-items-center   '>
				<span className="text-primary text-4xl scale-y-150">Testimonials</span>
				<div className='flex justify-between w-3/4   text-4xl text-primary'>
					<button onClick={prevReview}>
						<BsFillArrowLeftCircleFill />
					</button>
					<button onClick={nextReview}>
						<BsFillArrowRightCircleFill />
					</button>
				</div>
				<motion.div
					className='flex flex-col gap-4 font-oswald lg:text-lg tracking-wider  py-8 px-4 '
					initial={{ opacity: 0, scale: 0.9, x: 40 }}
					animate={{ opacity: 1, scale: 1, x: 0 }}
					transition={{ duration: 1.1 }}
					key={currentIndex}
				>
					<h2 className='font-bold font-oswald text-dark/90 text-lg lg:text-xl scale-y-150'>
						{reviews[currentIndex].Author}
					</h2>
					<p className='self-center text-justify font-bold text-dark/70 leading-7'>
						{reviews[currentIndex].Text}
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Reviews;
