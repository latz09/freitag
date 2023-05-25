import {
	FaPaintRoller,
	FaLightbulb,
	FaSink,
	FaCouch,
	FaHammer,
} from 'react-icons/fa';
import { MdPlumbing } from 'react-icons/md';

const Services = () => {
	return (
		<div className='grid place-items-center gap-8'>
			<span className='text-2xl lg:text-4xl tracking-wider scale-y-150 text-center text-primary mb-8 font-oswald'>Some Services I Offer</span>{' '}
			{/* <Icons /> */}
            <ServicesList />
		</div>
	);
};

export default Services;

const Icons = () => {
	const iconClasses = ['text-primary', 'text-primary'];
	return (
		<div className='flex justify-around w-full max-w-5xl mx-auto items-center text-3xl my-8'>
			<FaPaintRoller className={iconClasses[0]} />
			<MdPlumbing className={iconClasses[1]} />
			<FaLightbulb className={iconClasses[0]} />
			<FaSink className={iconClasses[1]} />
			<FaCouch className={iconClasses[0]} />
			<FaHammer className={iconClasses[1]} />
		</div>
	);
};

const services = [
	' Door Replacement',
	'Trim and Carpentry',
	'Interior Painting',
	'Staining or Matching Trim',
	'Framing/Remodeling',
	'Drywall Repair',
	'Tile Installation',
	'Misc Wall Hanging',
	'Furniture/item assembly',
	'Window Treatments',
	'Minor Plumbing and Electrical',
	'Replace Faucets',
	'Replace Light Fixtures',
	'Demo and Removal',
    
];


const ServicesList = () => {
    return (
        <>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 place-items-cente gap-5 lg:gap-12 text-center tracking-widest text-light lg:text-xl ">
                {services.map((service, index) => <span key={index} className="scale-y-125 font-oswald">{service}</span>) }
                

            </div>
            <span className=" mt-8 text-light tracking-widest text-lg lg:text-3xl ">And I am open to inquiries!</span>
            
        </>
    )
}