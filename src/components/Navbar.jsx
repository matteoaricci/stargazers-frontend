import React from 'react'
import '../Navbar.sass'

class Navbar extends React.Component {

    render() {
        return (
            <div id="nav-bar-body">
                <div className="space stars1"></div>
                <div className="space stars2"></div>
                <div className="space stars3"></div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                        <a className="navbar-brand" href="/"><img src="https://www.pngarts.com/files/3/Mario-Star-PNG-Image.png" width="30" height="30" className="d-inline-block align-top" alt="" /> Stargazers</a>
                        <div className="nav-item active">
                            <a className="nav-link" href="/constellations">Constellations</a>
                        </div>
                        <div className="nav-item active">
                            <a className="nav-link" href="/planets">Planets</a>
                        </div>
                        <div className="nav-item active">
                            <a className="nav-link" href="/signs">Signs</a>
                        </div>
                        <div className="nav-item active">
                            <a className="nav-link" href="/login">Login</a>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;