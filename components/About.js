const About = () => {
	return (
		<div className='max-w-5xl mx-auto px-2   text-lg lg:text-2xl text-dark tracking-wide'>
			<div className='grid gap-8'>
				<div className='text-secondary   font-bold tracking-widest font-questrial text-2xl scale-y-150  uppercase italic text-center'>
					Your Local Handyman
				</div>
				<div className='leading-10 opacity-70 gap-2 grid'>
					<div>
						<span className='font-bold text-primary'>
							For more than 20 years{' '}
						</span>
						I have honed my skills in the construction industry alongside
						leading contractors. However, since 2012, my focus has been to{' '}
						<span className='font-bold text-primary'>
							{' '}
							work directly for you!{' '}
						</span>
					</div>
					<div>
						Now serving landlords and homeowners, my aim is to streamline all
						your property repairs, big or small, with the personal touch{' '}
						<span className='font-bold text-primary'> you deserve.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
