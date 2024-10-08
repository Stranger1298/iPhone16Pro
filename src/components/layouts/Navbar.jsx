import { Link } from "react-router-dom"
import { navLists } from "../../constants"
import { appleImg, bagImg, searchImg } from "../../utils"

const Navbar = () => {
    return (

        <header className="w-full flex flex-col justify-between items-center relative z-20">
            <nav className="flex w-full screen-max-width items-center py-3 sm:px-10 px-5 bg-transparent">
                <Link to="/"><img src={appleImg} alt="Apple" width={12} height={12} /></Link>
                <div className="flex justify-center max-sm:hidden">
                    {navLists.map((nav) => (

                        <Link to={`/${nav}`} key={nav}>
                            <div
                                key={nav}
                                className="px-6 text-sm cursor-pointer text-gray-200 hover:text-white transition-all"

                            >
                                {nav}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-9">
                    <img
                        src={searchImg}
                        alt="search"
                        width={14}
                        height={14}
                        className="cursor-pointer"
                    />
                    <img
                        src={bagImg}
                        alt="bag"
                        width={14}
                        height={14}
                        className="cursor-pointer"
                    />
                </div>
            </nav>
        </header>

    )
}

export default Navbar
