export const Navbar = () => {
    return (
        <header className="flex items-center justify-between bg-blue-600 text-white py-4 px-8 shadow-md">
        <h1 className="text-4xl font-bold tracking-wide">Shop It</h1>
        <nav className="flex items-center gap-6">
            <span className="material-symbols-outlined text-3xl hover:text-gray-200 cursor-pointer">favorite</span>
            <span className="material-symbols-outlined text-3xl hover:text-gray-200 cursor-pointer">shopping_cart</span>
            <span className="material-symbols-outlined text-3xl hover:text-gray-200 cursor-pointer">account_circle</span>
        </nav>
        </header>
    );
};
