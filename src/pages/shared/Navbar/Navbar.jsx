import { NavLink } from 'react-router';
import { FiMenu, FiX, FiHome, FiShoppingCart, FiInfo, FiMail } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Central Tailwind CSS classes
    const getLinkClass = (isActive) =>
        `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
            isActive
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'text-gray-700 hover:bg-gray-100'
        }`;

    const signInBtnClass = 'px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2';

    const signInBtnMobileClass = 'w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2';

    const links = (
        <>
            <NavLink
                to='/'
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => getLinkClass(isActive)}
            >
                <FiHome size={18} /> Home
            </NavLink>
            <NavLink
                to='/products'
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => getLinkClass(isActive)}
            >
                <FiShoppingCart size={18} /> Products
            </NavLink>
            <NavLink
                to='/about'
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => getLinkClass(isActive)}
            >
                <FiInfo size={18} /> About
            </NavLink>
            <NavLink
                to='/contact'
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => getLinkClass(isActive)}
            >
                <FiMail size={18} /> Contact
            </NavLink>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <NavLink
                            to='/'
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                        >
                            Mezbahul
                        </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {links}
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className={signInBtnClass}>
                            <AiOutlineUser size={20} /> Sign In
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                        >
                            {isMenuOpen ? (
                                <FiX size={24} className="text-gray-700" />
                            ) : (
                                <FiMenu size={24} className="text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
                    <div className="px-2 pt-2 pb-3 flex flex-col space-y-1">
                        {links}
                        <div className="pt-4 border-t border-gray-200">
                            <button className={signInBtnMobileClass}>
                                <AiOutlineUser size={20} /> Sign In
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;