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
			className='grid gap-24  text-dark '
		>
			<WelcomeHero />
			<About />
			{/* <Services /> */}

			<SecondHero />
			<Reviews />
			<Images />
			<Footer />
		</motion.div>
	);
}
