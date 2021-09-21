import { useState } from "react";
import cartImg from "../../assets/cart.svg";
import cartRemoveImg from "../../assets/cart-remove.svg";
import { CartRemoveItem, CartTopbarOverview, CartTopbarOverviewItems, CartTopbarOverviewTotal, Container } from "./styles";

function itemQtyToOptions(itemQty: number) {
  let itemArrayQty = [];
  for (var i = 0; i < itemQty; i++) {
    itemArrayQty.push(i + 1);
  }
  return itemArrayQty;
}

export function CartTopbar() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const data = [
    {
      id: 1,
      title: "Calça Jogger Verde",
      sellBy: "Lojas Renner",
      imageUrl: "http://localhost:3000/images/calca-jogger-verde-80x110.png",
      color: "Verde",
      sizes: ["PP", "P", "M", "G", "XG"],
      qty: 6,
    },
    {
      id: 2,
      title: "Blusa em Linho com Detalhe Areia",
      sellBy: "Lojas Renner",
      imageUrl: "http://localhost:3000/images/blusa-em-linho-com-detalhe.png",
      color: "Areia",
      sizes: ["PP", "P", "M", "G"],
      qty: 5,
    }
  ]

  return (
    <Container>
      <button type="button" className="cart-topbar-open" onClick={() => setIsOpenCart(!isOpenCart)}>
        <img src={cartImg} alt="Carrinho de Compras" />
      </button>
      <CartTopbarOverview style={{ visibility: isOpenCart ? "visible" : "hidden", opacity: isOpenCart ? 1 : 0 }}>
        <h2>Minha Sacola</h2>
        {data.map(item => (
          <CartTopbarOverviewItems key={item.id}>
            <CartRemoveItem type="button">
              <img src={cartRemoveImg} alt="Remover do carrinho" />
            </CartRemoveItem>
            <img src={item.imageUrl} width="80" alt="Calça Jogger Verde" />
            <div>
              <h4>{item.title}</h4>
              <span>por <strong>{item.sellBy}</strong></span>
              <p>Cor: {item.color}</p>
              <div>
                <select name="size" id="size">
                  {item.sizes.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                  ))}
                </select>
                <select name="qty" id="qty">
                  {itemQtyToOptions(item.qty).map((qty, index) => (
                    <option key={index} value={qty}>{qty}</option>
                  ))}
                </select>
              </div>
            </div>
          </CartTopbarOverviewItems>
        ))}
        <CartTopbarOverviewTotal>
          <div className="shipping">
            Entrega a partir de <span>5 dias úteis</span><br />
            Retire a partir de <span>3 dias úteis</span>
          </div>
          <div className="total">
            R$ 149,90
          </div>
        </CartTopbarOverviewTotal>
        <button type="button" className="checkout">
          Finalizar compra
        </button>
      </CartTopbarOverview>
    </Container>
  );
}
