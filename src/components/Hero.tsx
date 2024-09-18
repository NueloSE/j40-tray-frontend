import foodBg from '../assets/food-bg.png';

const Hero = () => {
  return (
    <div className='border-b-yellow-700 bg-yellow-500'>
		<div className="container mx-auto flex flex-col max-h-[500px] overflow-x-hidden overflow-y-hidden md:flex-row justify-between items-center border-b-2 ">
	      <h1 className=' text-yellow-950 text-center font-bold text-5xl px-5 mt-10 md:px-10'>
	        Food Ordering One Click Away
	      </h1>
	      <img
	        src={foodBg}
	        className=" md:translate-y-80 hover:-translate-y-0 cursor-pointer transition duration-700 z-10 h-[700px] "
	      />
    	</div>
	</div>
  );
};

export default Hero;
