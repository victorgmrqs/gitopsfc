import { env } from "@env/index";

export const healthCheck = (): string => {
  // Lógica de negócio: aqui pode haver verificações de dependências, etc.
  // Neste exemplo, apenas retorna 'OK'.
  console.log(env.NODE_ENV)
  return 'OK';
};
