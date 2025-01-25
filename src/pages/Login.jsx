import FormLogin from '../components/FormLogin';

function Login() {
	return (
		<div>
			<nav className="navbar navbar-expand-md fixed-top bg-body">
				<div className="container"><a className="navbar-brand" href="#"><img id="logo" src="./src/assets/img/cosh.png"></img>COSH</a></div>
			</nav>
			<section className="position-relative py-4 py-xl-5 mt-5">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-6 col-xl-4">
							<div className="card mb-5">
								<div className="card-body d-flex flex-column align-items-center">
									<FormLogin route="/api/token/" method="POST" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<script src="assets/bootstrap/js/bootstrap.min.js"></script>
		</div>
	);
}

export default Login;
