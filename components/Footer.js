const Footer = () => {
	return (
		<>
			<div className='grid place-items-center gap-4 py-[10vh]   text-primary'>
				<div className='text-2xl lg:text-4xl scale-y-125 tracking-wider font-questrial font-bold text-dark/70 '>
					Schedule Jay Freitag
				</div>
				<span className=' text-xl lg:text-3xl'>{`651-230-3876`}</span>
                <div className="grid place-items-center font-bold text-dark/50">
                    <span >Monday - Friday</span>
                    <span>8AM - 6PM</span>
                </div>
			</div>
		</>
	);
};

export default Footer;
