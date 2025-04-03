
// Bordas de pizza disponíveis
export interface PizzaBorder {
  id: string;
  name: string;
  prices: {
    small: number;
    medium: number;
    large: number;
  };
}

export const pizzaBorders: PizzaBorder[] = [
  {
    id: "cheddar",
    name: "Cheddar",
    prices: {
      small: 7,
      medium: 10,
      large: 12
    }
  },
  {
    id: "catupiry",
    name: "Catupiry Original",
    prices: {
      small: 15,
      medium: 18,
      large: 20
    }
  },
  {
    id: "mussarela-gorgonzola",
    name: "Mussarela e Gorgonzola",
    prices: {
      small: 15,
      medium: 18,
      large: 20
    }
  },
  {
    id: "mussarela-presunto",
    name: "Mussarela e Presunto",
    prices: {
      small: 15,
      medium: 18,
      large: 20
    }
  }
];
