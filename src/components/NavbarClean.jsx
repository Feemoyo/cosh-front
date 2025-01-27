
import CoshLogo from '../assets/img/cosh.png';

function NavbarClean() {
	return (
		<nav className="navbar navbar-expand-md fixed-top bg-body">
			<div className="container"><a className="navbar-brand" href="#"><img id="logo" src={CoshLogo}></img>COSH</a></div>
		</nav>
	)
}

export default NavbarClean;