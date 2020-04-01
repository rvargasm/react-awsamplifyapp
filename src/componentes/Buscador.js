import React, {Component} from 'react';

class Buscador extends Component{

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        //tomamos el valor del input text
        const terminoBusqueda = this.busquedaRef.current.value;
        //lo enviamos al componente principal
        this.props.datosBusqueda(terminoBusqueda);        
    }
    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    {this.props.mensaje}
                    <div className="form-group col-md-8">
                        <input type="text" ref={this.busquedaRef} className="form-control form-control-lg" 
                        placeholder="Busca tu imagen. Ejemplo: futbol"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" 
                        value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;