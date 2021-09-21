import { Container } from "./styles"

export function PageProduct() {
  const item = {
    title: "BLUSA EM LINHO COM DETALHE",
    sellBy: "Lojas Renner",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim risus vel aliquet est at vitae in. Varius bibendum tristique sed mattis varius at neque, sed. Diam id et in volutpat cursus mattis nulla quis sollicitudin. Diam convallis sagittis amet, elementum.",
    colors: ["Areia", "Preto", "Cinza", "Branco"],
    sizes: ["PP", "P", "M", "G", "GG"],
    qty: 6,
    price: 129.90
  }

  return (
    <Container>
      <img src="http://localhost:3000/images/blusa-em-linho-com-detalhe.png" alt="Blusa em linho com detalhe" />
      <div className="content">
        <h1>{item.title}</h1>
        <p className="sell-by">Vendido e entregue por <strong>{item.sellBy}</strong></p>
        <div className="product-info">
          <ul>
            <li className="active">Detalhes</li>
            <li>Caimento</li>
            <li>Cuidados</li>
          </ul>
          <div>{item.description}</div>
        </div>
        <div className="shipping">
          <h4>Simular frete</h4>
          <form action="">
            <input type="text" placeholder="Digite seu CEP" />
            <button type="submit">ok</button>
          </form>
          <a href="https://buscacepinter.correios.com.br" target="_blank" rel="noreferrer">Não sei meu CEP</a>
        </div>
      </div>
    </Container>
  )
}
