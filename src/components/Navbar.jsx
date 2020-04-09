import React from 'react'

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        )
    }
}

export default Navbar;