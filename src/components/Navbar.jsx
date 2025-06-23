import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClasses = (path) =>
        `hover:text-blue-600 ${location.pathname === path ? 'text-blue-600 font-semibold underline underline-offset-4' : ''}`;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white text-gray-800 shadow-md' : 'bg-transparent text-white'
            }`}>
            <div className="flex justify-between items-center px-6 md:px-20 py-4 text-base">
                {/* Logo */}
                <img src={logo} alt="Logo" className="h-12 bg-white/50 rounded-lg w-auto cursor-pointer" onClick={() => navigate('/')} />

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-base font-semibold items-center">
                    <Link to="/" className={linkClasses('/')}>Home</Link>
                    <Link to="/about" className={linkClasses('/about')}>About</Link>
                    <Link to="/service" className={linkClasses('/service')}>Service</Link>
                    <Link to="/project" className={linkClasses('/project')}>Project</Link>
                    <Link to="/career" className={linkClasses('/career')}>Career</Link>
                    <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu Content */}
            {menuOpen && (
                <div className="md:hidden flex flex-col px-6 py-4 bg-white text-black space-y-3 shadow-md">
                    <Link to="/" className={linkClasses('/')} onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" className={linkClasses('/about')} onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/service" className={linkClasses('/service')} onClick={() => setMenuOpen(false)}>Service</Link>
                    <Link to="/project" className={linkClasses('/project')} onClick={() => setMenuOpen(false)}>Project</Link>
                    <Link to="/career" className={linkClasses('/career')} onClick={() => setMenuOpen(false)}>Career</Link>
                    <Link to="/contact" className={linkClasses('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}