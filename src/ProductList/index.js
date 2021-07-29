import React from "react";
import { useTable } from "react-table";
import { useHistory } from "react-router-dom";
import "./styles.css";

const ProductList = ({ products, onProductSelect }) => {
  const history = useHistory();

  const handleSelectProduct = (product) => {
    onProductSelect(product);
    history.push("/product");
  };

  const data = React.useMemo(() => products, [products]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Image",
        Cell: (row) => {
          return (
            <div>
              <img
                height={200}
                style={{ objectFit: "contain" }}
                src={row.row.original.image_link}
                alt="prod_img"
              />
            </div>
          );
        },
        id: "image_link",
      },

      {
        Header: "Name",
        accessor: "title",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Condition",
        accessor: "condition",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    products.length > 0 && (
      <div id="products__table__container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                style={{
                  border: "solid 1px lightgray",
                }}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "darkgray",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  style={{
                    border: "solid 1px lightgray",
                  }}
                  className="products__table__row"
                  onClick={() => handleSelectProduct(row.original)}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
};

export default ProductList;
