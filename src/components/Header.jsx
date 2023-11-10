import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-stone-50 shadow-sm ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-stone-700 ">HOMEGA</span>
            <span className="text-yellow-500">Emlak</span>
          </h1>
        </Link>
        <form className="bg-stone-200 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Ara..."
            className="bg-transparent focus:outline-none w-24
    sm:w-64"
          />
          <FaSearch className="text-slate-500 text-xl " />
        </form>
        <ul className="flex gap-4">
        <Link to='/'>
          <li className="hidden sm:inline text-slate-500 hover:underline">
            Ana Sayfa
          </li>
          </Link>
          <Link to='/about'>
          <li className="hidden sm:inline text-slate-500 hover:underline">
            Hakkında
          </li>
          </Link>
          <Link to='/sign-in'>
          <li className=" text-slate-500 hover:underline">Giriş</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
