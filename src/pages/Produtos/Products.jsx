import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/Products";
import Header from "../../components/headerComponent/HeaderComponent";
import Sidebar from "../../components/headerComponent/Sidebar/Sidebar";
import "./Products.style.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itensPorPagina, setItensPorPagina] = useState(5);
  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const productsData = await getProducts();
      setProducts(productsData);
    } catch (error) {
      setError("Erro ao carregar produtos");
    } finally {
      setLoading(false);
    }
  };

  const paginatedProducts = products.slice(
    (paginaAtual - 1) * itensPorPagina,
    paginaAtual * itensPorPagina
  );

  const handleItensPorPaginaChange = (e) => {
    setItensPorPagina(Number(e.target.value));
    setPaginaAtual(1);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <Sidebar />
      <div className="productsContent">
        <h1>Produtos</h1>

        <div className="paginationControls">
          <div className="itemsPerPage">
            <label>Itens :</label>
            <select
              value={itensPorPagina}
              onChange={handleItensPorPaginaChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          <table className="productTable">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Marca</th>
                <th>Preço</th>
                <th>Validade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paginatedProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>
                    {product.price
                      ? `R$ ${Number(product.price).toFixed(2)}`
                      : "N/A"}
                  </td>
                  <td>
                    {product.expirationDate
                      ? new Date(product.expirationDate).toLocaleDateString(
                          "pt-BR"
                        )
                      : "N/A"}
                  </td>
                  <td className="actionIcons">
                    <CiEdit className="editIcon" title="Editar" />
                    <FaRegTrashAlt className="deleteIcon" title="Deletar" />
                    <FiMoreHorizontal className="moreIcon" title="Mais" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Products;
