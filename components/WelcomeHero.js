// import Image from 'next/image';
// import hero from '../public/images/.jpg';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Navbar from './Navbar';

const WelcomeHero = () => {
	return (
		<div className='grid gap-16 justify-items-center h-[100vh] relative text-center'>
			<div
				className='absolute inset-0 bg-cover bg-bottom'
				style={{ backgroundImage: `url(${'images/4.jpg'})` }}
			></div>

			<div className='absolute inset-0 flex flex-col justify-center bg-dark/60   font-questrial'>
				<div className='absolute top-0 left-0 right-0'>
					<Navbar />
				</div>
				<div className=' h-full  grid place-items-center'>
					<div className='grid place-items-center gap-4 lg:gap-8 mx-4  tracking-widest '>
						<span className='uppercase text-4xl lg:text-6xl scale-y-125 lg:scale-y-150 font-oswald font-bold text-light'>
							Jay Freitag LLC
						</span>

						<span className='text-light text-xl lg:text-3xl '>
							Your Local Handyman, working directly for you.
						</span>
						<button className='border bg-primary border-primary hover:bg-primary/70 text-light px-4 py-3 shadow-lg rounded-sm text-xl font-bold transition duration-700 hover:scale-90 mt-6 lg:mt-0'>
							Contact Us
						</button>
					</div>
				</div>
				<div className='grid place-items-center gap-2 mb-8 text-2xl font-bold animate-pulse text-primary'>
					{/* <span className="scale-y-150 tracking-widest">Learn More</span> */}
					<span className='text-5xl'>
						<MdKeyboardArrowDown />{' '}
					</span>
				</div>
			</div>
		</div>
	);
};

export default WelcomeHero;
