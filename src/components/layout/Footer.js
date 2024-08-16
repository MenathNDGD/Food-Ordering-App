import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t p-8 text-gray-500 mt-16">
            <div className="flex justify-between items-center text-xl">
                <div className="text-xl font-semibold text-primary hover:text-primary-dark transition-colors duration-300">
                    Pizzalicious
                </div>
                <div className="text-center">
                    &copy; 2024 All Rights Reserved.
                </div>
                <div className="flex gap-4">
                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-blue-600 transition-colors duration-300"
                    >
                        <FaFacebookF />
                    </a>
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-pink-600 transition-colors duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-blue-400 transition-colors duration-300"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
}
