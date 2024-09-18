import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import MobileNavLinks from './MobileNavLinks';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet';
import { CircleUserRound, Menu } from 'lucide-react';

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-yellow-600" />
      </SheetTrigger>
      <SheetContent className="space-y-8">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-5">
              <CircleUserRound className="text-yellow-600" />
              {user?.email}
            </span>
          ) : (
            <span>Welcom to J40-TRAY!</span>
          )}
        </SheetTitle>

        <Separator />

        <SheetDescription className="flex flex-col gap-5">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button onClick={() => loginWithRedirect()} className="flex-1 font-bold bg-yellow-500">Log In</Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
