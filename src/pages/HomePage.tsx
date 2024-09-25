import egusi from '../assets/fast-delivery.png';
import fried from '../assets/hero-img.png';
import chicken from '../assets/payment.png';
import pie from '../assets/food.png';
import drinks from '../assets/few-click.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* Header section with title and subtitle */}
      <div className="w-[80%] self-center bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 z-10">
        <h1 className="text-4xl font-bold tracking-tight text-yellow-950">WHY J40-TRAY</h1>
        <span className="text-xl font-bold text-yellow-950">
          "J40-Tray brings a variety of cuisines and restaurants right to you on a platter.
          Experience the best flavors around—J40-Tray connecting people to Restaurants!"
        </span>
      </div>

      {/* Grid section displaying different categories */}
      <div className="grid md:grid-cols-5 gap-10">
        <div className="text-center">
          <img src={egusi} alt="" />
          <Link to="/AfricaDishesPage" className="font-bold text-yellow-900 text-1.5xl">
            Fast Delivery
          </Link>
        </div>

        <div className="text-center">
          <img src={fried} />
          <Link to="/ForeignDishesPage" className="font-bold text-yellow-900 text-1.5xl ">
            Unlimited Options
          </Link>
        </div>

        <div className="text-center">
          <img src={chicken} alt="" />
          <Link to="/AddOnPage" className="font-bold text-yellow-900 text-1.5xl">
            Easy Payment
          </Link>
        </div>

        <div className="text-center ">
          <img src={pie} alt="" />
          <Link to="/SnackPage" className="font-bold text-yellow-900 text-1.5xl">
            Only the Best
          </Link>
        </div>

        <div className="text-center">
          <img src={drinks} alt="" />
          <Link to="/DrinksPage" className="font-bold text-yellow-900 text-1.5xl">
            Few Clicks Away
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
