import React from 'react'

const HeaderFoto = () => {
    return(
        <header className="foto-header">
              <figure className="foto-usuario">
                <img src="https://instagram.fplu1-1.fna.fbcdn.net/vp/7cf937bce49078d0916756df4bb7a57b/5DCA9485/t51.2885-19/s150x150/43617705_1996692227045204_6564227697931714560_n.jpg?_nc_ht=instagram.fplu1-1.fna.fbcdn.net" alt="foto do usuario" />
                <figcaption className="foto-usuario">
                  <a href="#">
                    alots
                  </a>  
                </figcaption>
              </figure>
              <time className="foto-data">03/10/2016 20:13</time>
            </header>
    )
}
const FotoComentario = () => {
    return(
        <li className="comentario">
            <a className="foto-info-autor">seguidor </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
        </li>
    )
}

const FotoInfoLegenda = () => {
    return(
        <p className="foto-info-legenda">
            <a className="foto-info-autor">autor </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
        </p>
    )
}
const FotoInfo = () => {
    return(
        <div className="foto-info">
            <div className="foto-info-likes">

                <a href="#">
                  alots_ssa
                </a>
                ,
                <a href="#">
                  rafael_rollo
                </a> 

                 curtiram
             
              </div>

              <FotoInfoLegenda />

              <ul className="foto-info-comentarios">
                <FotoComentario />
                <FotoComentario />
                <FotoComentario />
              </ul>
            </div>
    )
}

const FotoAtualizacao = () => {
    return(
        <section className="fotoAtualizacoes">
              <a href="#" className="fotoAtualizacoes-like">Likar</a>
              <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
              </form>
        </section>
    )
}

const Foto = () => {
    return(
        <div className="foto">
            
            <HeaderFoto />

            <img alt="foto" className="foto-src" src="https://images-americanas.b2w.io/produtos/01/00/sku/38018/9/38018928_1GG.jpg" />

            <FotoInfo />
        
            <FotoAtualizacao />
        
        </div> 
    )
}

export default Foto