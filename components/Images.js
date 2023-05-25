import img1 from '../public/images/main.jpg';
import img2 from '../public/images/2.jpg';
import img3 from '../public/images/3.jpg';
import img4 from '../public/images/4.jpg';
import desk from '../public/images/desk.jpg';
import door from '../public/images/door.jpg';
import stairs from '../public/images/stairs.jpg';
import shelf from '../public/images/shelf.jpg';
import bathroom1 from '../public/images/bathroom1.jpg';
import bathroom2 from '../public/images/bathroom2.jpg';
import bathroom3 from '../public/images/bathroom3.jpg';
import framing from '../public/images/framing.jpg';
import framing2 from '../public/images/framing2.jpg';
import framing3 from '../public/images/framing3.jpg';
import kitchen from '../public/images/kitchen.jpg';
import wetbar from '../public/images/wetbar.jpg';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Images = () => {
	const images = [img3, shelf, kitchen,  framing, img4, wetbar,  bathroom2, desk, door, img2, framing2, bathroom3,   bathroom1, stairs, framing3 ];

	const [numImagesToShow, setNumImagesToShow] = useState(3);

	const handleLoadMore = () => {
		setNumImagesToShow((prevNum) => prevNum + 3);
	};

	return (
		<>
			<h1 className='text-3xl font-bold text-center scale-y-150 text-dark/70'>
				Recent Work
			</h1>
			<div className='grid md:grid-cols-2 xl:grid-cols-3 place-items-center max-w-7xl mx-auto gap-y-6 lg:gap-y-12 gap-x-4'>
				{images.slice(0, numImagesToShow).map((image, index) => (
					<motion.div
						key={index}
						className='grid place-items-center shadow-lg'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2.4 }}
					>
						<Image src={image} alt='' />
					</motion.div>
				))}
			</div>

			{numImagesToShow < images.length && (
				<div className='text-center mt-4'>
					<button
						className=' '
						onClick={handleLoadMore}
					>
						<div className='scale-y-150 text-primary font-bold text-lg lg:text-2xl'> View More Of Our Gallery!</div>
					</button>
				</div>
			)}
		</>
	);
};

export default Images;
