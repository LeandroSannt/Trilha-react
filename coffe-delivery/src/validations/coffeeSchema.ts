import * as zod from "zod";

export const schemaValidation = zod.object({
  cep: zod.string().min(8, "Digite um cep valido"),
  rua: zod.string().min(1, "Digite um rua valida"),
  numero: zod.string().min(1, "Digite um numero valido"),
  // complemento: zod.string().min(1, "Digite um co valido"),
  bairro: zod.string().min(1, "Digite um bairro valido"),
  cidade: zod.string().min(1, "Digite um cidade valido"),
  uf: zod.string().min(1, "Digite um estado valido"),
});
