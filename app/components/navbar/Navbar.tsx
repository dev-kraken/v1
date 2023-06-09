import Container from "../Container";
import Auth from "./Auth";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm dark:bg-slate-900 dark:shadow-slate-800">
      <div className="py-4 border-bottom-[1px]">
        <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                <Logo />
                {/* <UserMenu /> */}
                <Auth />
            </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
