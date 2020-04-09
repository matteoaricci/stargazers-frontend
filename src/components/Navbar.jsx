import React from 'react'

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img src="https://www.pngarts.com/files/3/Mario-Star-PNG-Image.png" width="30" height="30" className="d-inline-block align-top" alt="" /> Stargazers</a>
                </nav>
            </div>
        )
    }
}

export default Navbar;