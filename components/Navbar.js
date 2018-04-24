import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">Bootstrap Next</a>
      <div className="collapse navbar-collapse">
        {/* <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul> */}
      </div>
    </div>
  </nav>
);

export default Navbar;