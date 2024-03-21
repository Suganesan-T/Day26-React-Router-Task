import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav text-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page" href="#">ALL</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/full stack development"} className="nav-link" href="#">FULL STACK DEVELOPMENT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/data science"} className="nav-link" href="#">DATA SCIENCE</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/cyber security"} className="nav-link">CYBER SECURITY</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/career"} className="nav-link" href="#">CAREER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar