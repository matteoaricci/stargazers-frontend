import React from 'react';

class PlanetCard extends React.Component {
 render() {
     return (
         <div>
             <h1>{this.props.planet.name}</h1>
         </div>
     )
 }
}

export default PlanetCard