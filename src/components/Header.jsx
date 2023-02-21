import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Home">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/AddProduct">Add-prodcut</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/ProductsList">Products-list</Link>
                            </li>
                        </ul>

                        <form className='d-flex '>
                            <li className="nav-item">
                                <Link className="btn btn-primary" aria-current="page" to="/login">Log-in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-primary" to="Register">Register</Link>
                            </li>
                        </form>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header