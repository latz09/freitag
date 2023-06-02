import About from '../components/About';
import Footer from '../components/Footer';
import Images from '../components/Images';
import SecondHero from '../components/SecondHero';
import WelcomeHero from '../components/WelcomeHero';
import { motion } from 'framer-motion';
import Reviews from '../components/Reviews';

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7 }}
			className='flex flex-col  text-dark '
		>
			<WelcomeHero />
			<div className="my-24">
				<About />
			</div>
			{/* <Services /> */}

			<SecondHero />
			<div className='grid place-items-center mb-24'>
				<span className='text-primary py-2 shadow-md font-bold tracking-widest font-questrial text-2xl scale-y-150 mb-16 uppercase italic bg-secondary w-full text-center'>
					Why Jay Freitag . . .
				</span>
				<Reviews />
			</div>
			<div className='grid place-items-center'>
				<span className='text-secondary py-2  font-bold tracking-widest font-questrial text-2xl scale-y-150 mb-16 uppercase italic text-center'>
					My Work . . .
				</span>
				<Images />
			</div>
			<Footer />
		</motion.div>
	);
}
