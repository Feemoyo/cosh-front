import NavbarClean from "../components/NavbarClean";
import FormProject from "../components/FormProject";
import { useState, useEffect } from "react";

function Checklist() {

	return (
		<div>
			<NavbarClean />
			<div className="lh-lg pb-0" id="checklist">
				<div className="container-fluid lh-lg">
					<div className="row">
						<div className="col-12 col-md-auto text-start d-md-flex d-lg-flex d-xl-flex d-xxl-flex flex-column flex-grow-0 sidebar"><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a><a className="text-decoration-none text-reset side-botton" href="#">Projeto</a></div>
						<div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
							<div className="row">
								<div className="col"></div>
								<div className="col"></div>
							</div>
							<div className="row">
								<div className="col"></div>
								<div className="col"></div>
							</div>
							<div className="row">
								<div className="col">
									<FormProject />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<script src="assets/bootstrap/js/bootstrap.min.js"></script>
		</div>

	);
}

export default Checklist;