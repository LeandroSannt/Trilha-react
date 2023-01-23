export interface ICoffes {
  id: number;
  name: string;
  description: string;
  categorys: string[];
  photo: string;
  price: number;
}

export interface DataProps {
  cep: string;
  rua: string;
  complemento: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}
