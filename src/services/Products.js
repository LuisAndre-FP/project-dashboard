import { apiProducts } from "../api";

export async function getProducts() {
  try {
    const response = await apiProducts.get("/products");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
}
