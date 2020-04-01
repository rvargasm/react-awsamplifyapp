import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
    termino:'',
    pagina:'',
    imagenes:[]
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if(pagina===1) return null;
    pagina-=1;
    this.setState({
      pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    })
    console.log(pagina)
  }

  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina+=1;
    this.setState({
      pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    })
    console.log(pagina)
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino:termino,
      pagina:1
    }, () => {
      this.consultarApi();
    })
  }

  consultarApi = () => {
    const url = `https://pixabay.com/api/?key=15844491-4d322d9fb10b32993d3239e91&q=${this.state.termino}&page=${this.state.pagina}`;
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({ imagenes : resultado.hits }))
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">
            Buscador de imágenes.
          </p>
          <Buscador
            datosBusqueda={this.datosBusqueda}/>
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes = {this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}/>
        </div>
        
      </div>
    );
  }
}

export default App;
