const min = 2;
const max = 25;

export default function handler(req, res) {
  res.status(200).json(
    {
      "produtos": [
        {
          "nome": "Arroz",
          "preço": 5.99,
          "descrição": "Arroz tipo 1, pacote com 1kg",
          "image": "/products/arroz.webp",
          "sale": Math.floor(Math.random() * (max - min) + min),
          "tabela nutricional": {
            "valor energético": "150 kcal",
            "proteínas": "3g",
            "carboidratos": "30g",
            "gorduras totais": "1g"
          },
          "categoria": "alimentos"
        },
        {
          "nome": "Sabão em pó",
          "preço": 14.99,
          "descrição": "Sabão em pó Tixan Ypê, pacote com 2kg",
          "image": "/products/sabao_em_po.jpg",
          "sale": Math.floor(Math.random() * (max - min) + min),
          "categoria": "limpeza"
        },
        {
          "nome": "Leite em pó",
          "preço": 10.99,
          "descrição": "Leite em pó integral, lata com 400g",
          "image": "/products/leite_em_po.jpg",
          "sale": Math.floor(Math.random() * (max - min) + min),
          "tabela nutricional": {
            "valor energético": "350 kcal",
            "proteínas": "15g",
            "carboidratos": "25g",
            "gorduras totais": "20g"
          },
          "categoria": "alimentos"
        },
        {
          "nome": "Biscoito recheado",
          "preço": 2.99,
          "descrição": "Biscoito recheado sabor chocolate, pacote com 150g",
          "image": "/products/biscoito_recheado.webp",
          "sale": Math.floor(Math.random() * (max - min) + min),
          "tabela nutricional": {
            "valor energético": "200 kcal",
            "proteínas": "2g",
            "carboidratos": "30g",
            "gorduras totais": "8g"
          },
          "categoria": "alimentos"
        },
        {
          "nome": "Feijão",
          "preço": 4.99,
          "descrição": "Feijão carioca, pacote com 1kg",
          "image": "/products/feijao.webp",
          "sale": Math.floor(Math.random() * (max - min) + min),
          "tabela nutricional": {
            "valor energético": "100 kcal",
            "proteínas": "5g",
            "carboidratos": "20g",
            "gorduras totais": "0,5g"
          },
          "categoria": "alimentos"
        },
        {
          "nome": "Detergente líquido",
          "preço": 3.49,
          "descrição": "Detergente líquido Ypê, 500ml",
          "image": "/products/detergente.webp",
          "sale": Math.floor(Math.random() * (max - min) + min),
          "categoria": "limpeza"
        },
        {
          "nome": "Café",
          "preço": 7.99,
          "descrição": "Café torrado e moído, pacote com 250g",
          "image": "/products/cafe.webp",
          "sale": Math.floor(Math.random() * (max - min) + min),
          "categoria": "alimentos"
        },
        {
          "nome": "Sabonete",
          "preço": 1.49,
          "descrição": "Sabonete em barra, pacote com 4 unidades",
          "image": "/products/sabonete.webp",
          "sale": Math.floor(Math.random() * (max - min) + min),
          "categoria": "higiene pessoal"
        },
        {
          "nome": "Água sanitária",
          "preço": 2.99,
          "descrição": "Água sanitária Ypê, 1L",
          "image": "/products/agua_sanitaria.png",
          "sale": Math.floor(Math.random() * (max - min) + min),
          "categoria": "limpeza"
        },
        {
          "nome": "Papel higiênico",
          "preço": 11.99,
          "descrição": "Papel higiênico folha dupla, pacote com 12 rolos",
          "image": "/products/papel_higienico.png",
          "sale": Math.floor(Math.random() * (max - min) + min),
          "categoria": "higiene pessoal"
        }
      ]
    }
    
   )
}
