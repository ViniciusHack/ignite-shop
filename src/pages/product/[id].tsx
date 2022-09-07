import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";


export default function Product() {

  return (
    (
      <ProductContainer>
        <ImageContainer>

        </ImageContainer>
        <ProductDetails>
          <h1>Camiseta X</h1>
          <span>R$ 79,90</span>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatum ipsam incidunt expedita sed veniam vel veritatis magnam soluta. Aspernatur, inventore. Nesciunt veniam necessitatibus excepturi eum, explicabo non sed? Dolorem.</p>
        
          <button>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    )
  )
}