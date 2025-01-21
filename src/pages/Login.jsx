
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
									<form className="text-center" method="post">
										<div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email"></input></div>
										<div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password"></input></div>
										<div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Login</button></div>
									</form>
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
