import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () =>{
	const {user, logout} = useAuth0();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex item-center px-3 font-bold hover:text-yellow-700 gap-2">
				<CircleUserRound />
				{user?.email}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
			<DropdownMenuItem>
				<Link className="font-bold hover:text-yellow-600" to="/user-profile">
					User Profile
				</Link>
				</DropdownMenuItem>

				<Separator />

				<DropdownMenuItem>
					<Button onClick={() => logout()} className="flex flex-1 font-bold bg-yellow-600">
						Log Out
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UsernameMenu;