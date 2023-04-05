const min = 2;
const max = 25;

export default function handler(req, res) {
  res.status(200).json(
    {
      products: [
        {
          name: "Arroz",
          price: 5.99,
          description: "Arroz tipo 1, pacote com 1kg",
          image: "/products/arroz.webp",
          sale: Math.floor(Math.random() * (max - min) + min),
          nutritionalTable: {
            energyValue: "150 kcal",
            protein: "3g",
            carbs: "30g",
            totalFat: "1g"
          },
          categories: "alimentos"
        },
        {
          name: "Sabão em pó",
          price: 14.99,
          description: "Sabão em pó Tixan Ypê, pacote com 2kg",
          image: "/products/sabao_em_po.jpg",
          sale: Math.floor(Math.random() * (max - min) + min),
          categories: "limpeza"
        },
        {
          name: "Leite em pó",
          price: 10.99,
          description: "Leite em pó integral, lata com 400g",
          image: "/products/leite_em_po.jpg",
          sale: Math.floor(Math.random() * (max - min) + min),
          nutritionalTable: {
            energyValue: "350 kcal",
            protein: "15g",
            carbs: "25g",
            totalFat: "20g"
          },
          categories: "alimentos"
        },
        {
          name: "Biscoito recheado",
          price: 2.99,
          description: "Biscoito recheado sabor chocolate, pacote com 150g",
          image: "/products/biscoito_recheado.webp",
          sale: Math.floor(Math.random() * (max - min) + min),
          nutritionalTable: {
            energyValue: "200 kcal",
            protein: "2g",
            carbs: "30g",
            totalFat: "8g"
          },
          categories: "alimentos"
        },
        {
          name: "Feijão",
          price: 4.99,
          description: "Feijão carioca, pacote com 1kg",
          image: "/products/feijao.webp",
          sale: Math.floor(Math.random() * (max - min) + min),
          nutritionalTable: {
            energyValue: "100 kcal",
            protein: "5g",
            carbs: "20g",
            totalFat: "0,5g"
          },
          categories: "alimentos"
        },
        {
          name: "Detergente líquido",
          price: 3.49,
          description: "Detergente líquido Ypê, 500ml",
          image: "/products/detergente.webp",
          sale: Math.floor(Math.random() * (max - min) + min),
          categories: "limpeza"
        },
        {
          name: "Café",
          price: 7.99,
          description: "Café torrado e moído, pacote com 250g",
          image: "/products/cafe.webp",
          sale: Math.floor(Math.random() * (max - min) + min),
          categories: "alimentos"
        },
        {
          name: "Sabonete",
          price: 1.49,
          description: "Sabonete em barra, pacote com 4 unidades",
          image: "/products/sabonete.webp",
          sale: Math.floor(Math.random() * (max - min) + min),
          categories: "higiene pessoal"
        },
        {
          name: "Água sanitária",
          price: 2.99,
          description: "Água sanitária Ypê, 1L",
          image: "/products/agua_sanitaria.png",
          sale: Math.floor(Math.random() * (max - min) + min),
          categories: "limpeza"
        },
        {
          name: "Papel higiênico",
          price: 11.99,
          description: "Papel higiênico folha dupla, pacote com 12 rolos",
          image: "/products/papel_higienico.png",
          sale: Math.floor(Math.random() * (max - min) + min),
          categories: "higiene pessoal"
        }
      ]
    }
    
   )
}
