import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="p-8 mt-16 text-gray-500 border-t">
            <div className="flex items-center justify-between text-xl">
                <div className="text-xl font-semibold transition-colors duration-300 text-primary hover:text-primary-dark">
                    <a href={'/'}>Pizzalicious</a>
                </div>
                <div className="text-xl text-center text-gray-500">
                    &copy; 2024 All Rights Reserved.
                </div>
                <div className="flex gap-4">
                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-colors duration-300 hover:text-blue-600"
                    >
                        <FaFacebookF />
                    </a>
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-colors duration-300 hover:text-pink-600"
                    >
                        <FaInstagram />
                    </a>
                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-colors duration-300 hover:text-blue-400"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
}
