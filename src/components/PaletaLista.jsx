import "./PaletaLista.css";

function PaletaLista() {
  return (
    <div className="PaletaLista">
      <div className="PaletaListaItem">
        <div>
          <div className="PaletaListaItem__titulo">Doce de Leite</div>
          <div className="PaletaListaItem__preco">R$ 10,00</div>
          <div className="PaletaListaItem__descricao">
            Paleta de Doce de Leite
          </div>
          <div className="PaletaListaItem__acoes">
            <button clasName="Acoes__adicionar--preencher">adicionar</button>
          </div>
        </div>
        <img
          clasName="PaletaListaItem__foto"
          src={require("../assets/images/doce-de-leite-com-doce-de-leite.png")}
          alt="Paleta de doce de leite"
        />
      </div>
    </div>
  );
}

export default PaletaLista;
