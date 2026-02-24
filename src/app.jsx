import { useState } from 'react'
import { BarraFerramentaHori, ContainerGeral, NotaCartao, NotasContainer, SubContainerGeral } from './estiloGlobal/estilosG'
import { CgSoftwareDownload, CgSoftwareUpload } from 'react-icons/cg'
import { IoMdAdd } from 'react-icons/io'
import LogoImg from './assets/anotaai.png'

function App() {
  const [listaNotas, setListaNotas] = useState([])
  const [mostraModal, setMostraModal] = useState(true)
  const [novoAtualizar, setNovoAtualizar] = useState(false)
  const [chaveUpdate, setChaveUpdate] = useState(0)

    
  // Salva as notas
  function salvaNota(){

    if(!novoAtualizar){
      
      setMostraModal(!mostraModal)
  
      let elementos = document.querySelectorAll(".modal p")
      if(elementos[0].innerText.trim() === "" || elementos[1].innerText.trim() === ""){
        setMostraModal(!mostraModal)
        return
      }
      
      let arr = listaNotas
      let obj = {
        id: `nt${listaNotas.length}`,
        titulo: elementos[0].innerText.trim(),
        conteudo: elementos[1].innerText.trim()
      }
      
      arr.push(obj)
      
      setListaNotas(arr)
      setMostraModal(!mostraModal)
    }
    else {
      let elementos = document.querySelectorAll(".modal p")
      let nchave = chaveUpdate
      
      listaNotas[nchave].titulo = elementos[0].innerText
      listaNotas[nchave].conteudo = elementos[1].innerText
      
      setListaNotas(listaNotas)

      elementos[0].innerText = ""
      elementos[1].innerText = ""
      
      setMostraModal(!mostraModal)
      setChaveUpdate(0)

    }

    
  }

  // Apaga o conteúdo do modal com a nota e mostra ela na tela
  function cancelarNota(){

    let elementos = document.querySelectorAll(".modal p")

    elementos[0].innerText = ""
    elementos[1].innerText = ""
    
    setMostraModal(!mostraModal)
  }

  // 
  function novoOuAtualizar(atualizar = "0", e){
    cancelarNota()
    if(atualizar === "1"){
      setNovoAtualizar(!novoAtualizar)
      
      let elementos = document.querySelectorAll(".modal p")
      let nchave = Number(e.target.dataset.chave)
      setChaveUpdate(nchave)
      
      elementos[0].innerText = listaNotas[nchave]?.titulo
      elementos[1].innerText = listaNotas[nchave]?.conteudo
      
    }
  }


  

  return (
    <ContainerGeral id='containerGeral'>
      <SubContainerGeral>
        <BarraFerramentaHori>
          <p className='icone'><img src={LogoImg}/></p>
          <p className='bfhtitulo'>Anota aí</p>
          <p className='icd itemdireita3'><CgSoftwareDownload style={{fontSize: "32px"}}/></p>
          <p className='icd itemdireita2'><CgSoftwareUpload style={{fontSize: "32px"}}/></p>
          <p className='icd itemdireita1' onClick={() => novoOuAtualizar("0")}><IoMdAdd style={{fontSize: "32px"}}/></p>
        </BarraFerramentaHori>

          <div className='containerModal' style={{visibility: mostraModal? "hidden":"visible" }}>
            <div className='modal' data-chave="">
              <div className='containerBotoesModal'>
                <button onClick={() => {if(novoAtualizar){setMostraModal(!mostraModal); setNovoAtualizar(!novoAtualizar);}else{ cancelarNota()}}}>Cancelar</button>
                <button onClick={() => {salvaNota()}}>{novoAtualizar? "Atualizar" : "Salvar"}</button>
              </div>
              <p className='titu' contentEditable suppressContentEditableWarning data-chave=""></p>
              <p className='conteudo' contentEditable suppressContentEditableWarning data-chave=""></p>
            </div>
          </div>
          
          {
            listaNotas.length === 0 ?
              <>
                <p style={{textAlign: "center", marginTop: "30px"}}>Lista de notas vazia</p>
              </>
              :
              <NotasContainer>
                {
                  listaNotas.map((l, li) => (
                    <NotaCartao key={`lista${li}`} id={`nt${li}`} data-chave={`${li}`} onClick={(e) => {novoOuAtualizar("1", e); setNovoAtualizar(!novoAtualizar)}}>
                      <p className='titu' dangerouslySetInnerHTML={{__html: l?.titulo}} data-chave={`${li}`}></p>
                      <p className='conteudo' dangerouslySetInnerHTML={{__html: l?.conteudo}} data-chave={`${li}`}></p>
                    </NotaCartao>
                  ))
                }
              </NotasContainer>
          }

         
      </SubContainerGeral>
    </ContainerGeral>
  )
}

export default App
