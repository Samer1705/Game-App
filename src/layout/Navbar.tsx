import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex bg-background text-primary-text top-0 py-3 flex-wrap justify-around bg-silver">
      <h1 className="text-lg font-semibold">Gameify</h1>
      <ul className="flex gap-[40px] text-m">
        <Link className="hover:border-b-4 border-primary-blue cursor-pointer" to='/'>Home</Link>
        <Link className="hover:border-b-4 border-primary-blue cursor-pointer" to='/'>Popular</Link>
        <Link className="hover:border-b-4 border-primary-blue cursor-pointer" to='/'>Upcoming</Link>
        <Link className="hover:border-b-4 border-primary-blue cursor-pointer" to='/'>Trending</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
