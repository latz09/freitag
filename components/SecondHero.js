import Services from './Services';

const SecondHero = () => {
	return (
		<div className='grid gap-16 justify-items-center h-[125vh] relative text-center'>
			<div
				className='absolute inset-0 bg-cover bg-center'
				style={{ backgroundImage: `url(${'images/bathroom1.jpg'})` }}
			></div>

			<div className='absolute inset-0 flex flex-col justify-center bg-dark/80   font-questrial'>
				<Services />
			</div>
		</div>
	);
};

export default SecondHero;
