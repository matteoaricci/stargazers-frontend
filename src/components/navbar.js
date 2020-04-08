import React from 'react'

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
                        Stargazers
                    </a>
                </nav>
            </div>
        )
    }
}

export default Navbar;