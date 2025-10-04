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
        <section className={`font-pprimary items-top relative flex justify-end lg:justify-between ${className} `}>
            <div className="fixed left-10 lg:hidden">
                <button onClick={changeNavBarVisibility}>
                    <MenuIcon className="size-10 cursor-pointer hover:scale-105" />
                </button>
            </div>

            <aside className="hidden lg:block">
                {title ? (
                    <h2 className="text-secondary-500 text-4xl font-semibold"> {title}</h2>
                ) : (
                    <>
                        <h3 className="text-3xl font-bold">Hi, {USER_NAME}</h3>
                        <h4 className="text-secondary-400 text-xl"> Let's finish your task today!</h4>
                    </>
                )}
            </aside>

            <figure>
                <img src={PROFILE_PICTURE} alt="User profile picture" className="size-15 rounded-full" />
            </figure>
        </section>
    );
}

export default Header;
