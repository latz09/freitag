import About from '../components/About';
import Footer from '../components/Footer';
import Images from '../components/Images';
import SecondHero from '../components/SecondHero';

import Services from '../components/Services';
import WelcomeHero from '../components/WelcomeHero';

export default function Home() {
	return (
		<div className='grid gap-24  text-dark '>
			<WelcomeHero />
			<About />
			{/* <Services /> */}
			
				<SecondHero />
        <Images />
				<Footer />
			
		</div>
	);
}
