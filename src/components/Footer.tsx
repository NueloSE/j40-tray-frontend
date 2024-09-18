import { Link } from "react-router-dom";
import fb from "../assets/facebook.svg"
import insta from "../assets/instagram.svg"
import x from "../assets/x.svg"

const Footer = () => {
	return  (
		<div className="bg-yellow-500 py-10">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<Link to="/">
				<span className="text-3xl text-black hover:text-white font-bold tracking-tight ">
					J40-Tray!
				</span>
				</Link>
				<span className="text-black font-bold tracking-tight flex flex-col gap-4 text-center">
					<span className="tracking-widest">O8161685012</span>
					<div className="flex gap-5 cursor-pointer ">
						<Link to="#">
							<img src={fb} alt="" className="hover:bg-white rounded-md" />
						</Link>
						<Link to="#">
							<img src={insta} alt="" className="hover:bg-white rounded-md"/>
						</Link>
						<Link to="/">
						<img src={x} alt="" className="hover:bg-white rounded-md"/>
						</Link>
					</div>
				</span>
			</div>
		</div>
	);
};

export default Footer;
