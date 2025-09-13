import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";

export const Navbar = () => {

    const navigate = useNavigate();
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
    const { token, loginDispatch } = useLogin();

    const onLoginClick = () => {
        if(!token?.access_token){
            navigate('/login');
        }
        else{
            loginDispatch({type: 'LOGOUT'})
            navigate('/login');
        }
    }

    return (
        <header className="flex items-center justify-between bg-blue-600 text-white py-4 px-8 shadow-md">
        <h1 onClick={() => navigate('/')} className="text-4xl font-bold tracking-wide hover:cursor-pointer">Shop It</h1>
        <nav className="flex items-center gap-6">
            <span className="material-symbols-outlined text-3xl hover:text-gray-200 cursor-pointer">favorite</span>
            <span onClick={() => navigate('/cart')} className="material-symbols-outlined text-3xl hover:text-gray-200 cursor-pointer">shopping_cart</span>
            <div className="relative">
                <span onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)} className="material-symbols-outlined text-3xl hover:text-gray-200 cursor-pointer">
                    account_circle
                </span>
                {
                    isAccountDropdownOpen && <div className="absolute">
                        <button onClick={onLoginClick} className="hover:cursor-pointer">
                            {
                                token?.access_token ? 'Logout' : 'Login'
                            }
                        </button>
                    </div>
                }
            </div>
        </nav>
        </header>
    );
};
