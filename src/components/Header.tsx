import { useNavBar, useUser } from '../context';

import MenuIcon from '../assets/icons/menu-icon.svg?react';

type HeaderProps = {
    className?: string;
    title?: string;
};

function Header({ className, title }: HeaderProps) {
    const { USER_NAME, PROFILE_PICTURE } = useUser();
    const { changeNavBarVisibility } = useNavBar();

    return (
        <header className={`font-primary items-top relative mb-10 flex justify-end lg:mb-0 lg:justify-between ${className}`}>
            <div className="fixed left-10 lg:hidden">
                <button onClick={changeNavBarVisibility} title="Open menu" aria-label="Open menu button">
                    <MenuIcon className="size-10 cursor-pointer hover:scale-105" />
                </button>
            </div>

            <aside className="lg:block">
                {title ? (
                    <h2 className="text-secondary-500 text-right text-4xl font-semibold lg:text-left"> {title}</h2>
                ) : (
                    <>
                        <h3 className="text-right text-3xl font-bold lg:text-left">Hi, {USER_NAME}</h3>
                        <h4 className="text-secondary-400 text-right text-xl lg:text-left"> Let's finish your task today!</h4>
                    </>
                )}
            </aside>

            <figure className="hidden lg:block">
                <img src={PROFILE_PICTURE} alt="User profile picture" className="size-15 rounded-full" />
            </figure>
        </header>
    );
}

export default Header;
