import egusi from '../assets/soupbowl.com.png'
import fried from "../assets/fried-rice.png"
import chicken from "../assets/chicken.png"
import pie from "../assets/pie.png"
import drinks from "../assets/assorted-drinks.png"
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div className="flex flex-col gap-12">
			<div className="w-[80%] self-center bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 z-10">
				<h1 className="text-4xl font-bold tracking-tight text-yellow-800">
					Tuck into a takeaway
				</h1>
				<span className="text-xl font-bold text-yellow-950">
					Bring Varieties with Clicks
				</span>
			</div>

			<div className="grid md:grid-cols-5 gap-10">
				<div className='text-center'>
					<img src={egusi} alt="" />
					<Link to="/AfricaDishesPage" className='font-bold text-yellow-600 text-2xl '>African dishes</Link>
				</div>
				
				<div className='text-center'>
					<img src={fried} />
					<Link to="/ForeignDishesPage" className='font-bold text-yellow-800 text-2xl '>Other dishes</Link>
				</div>
				
				<div className="text-center">
					<img src={chicken} alt="" />
					<Link to="/AddOnPage" className='font-bold text-yellow-800 text-2xl'>Add On</Link>
				</div>
				
				<div className="text-center ">
					<img src={pie} alt="" />
					<Link to="/SnackPage" className='font-bold text-yellow-800 text-2xl'>Snacks</Link>
				</div>
				
				<div className="text-center">
					<img src={drinks} alt="" />
					<Link to="/DrinksPage" className='font-bold text-yellow-800 text-2xl'>Drinks</Link>
				</div>
			</div>

		</div>
	)
}

export default HomePage;