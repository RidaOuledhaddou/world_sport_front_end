import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Update_product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    show_products();
  }, []);

  async function show_products() {
    let res = await fetch("http://127.0.0.1:8000/api/show_product");
    let data = await res.json();
    setProduct(data);
  }

  return (
    <>
            <header className="navbar">
                <div className="container">
                    <div className="nav-wrapper grid p-2">
                        <div className="flex justify-between items-center">
                            <img src="../assets/images/logo.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </header>
            <div>
              <div style={styles.container}>
    <h2 style={styles.title}>Update Products</h2>
    <table style={styles.table} border="1">
      <thead>
        <tr>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Old Price</th>
          <th style={styles.th}>Price</th>
          <th style={styles.th}>Stock Quantity</th>
          <th style={styles.th}>Image</th>
          <th style={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {product.map((p) => (
          <tr key={p.id}>
            <td style={styles.td}>{p.name}</td>
            <td style={styles.td}>{p.old_price}</td>
            <td style={styles.td}>{p.price}</td>
            <td style={styles.td}>{p.stock_quantity}</td>
            <td style={styles.td}>
              <img
                src={`http://127.0.0.1:8000/storage/${p.image}`}
                alt={p.name}
                style={styles.img}
              />
            </td>
            <td style={styles.td}>
              <Link to={`/update-product/${p.id}`}>
                <button style={styles.button}>Update</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '960px',
    height : '800px',
    margin: 'auto',
    padding: '40px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    borderRadius: '8px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    margin: '20px 0'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
  },
  th: {
    backgroundColor: '#f4f4f4',
    padding: '10px 20px',
    border: '1px solid #ccc'
  },
  td: {
    textAlign: 'center',
    padding: '10px 20px',
    border: '1px solid #ccc'
  },
  img: {
    width: '100px', // Fixed width for images
    height: '50px', // Fixed height for images
    objectFit: 'cover' // Ensures the image covers the set height and width
  },
  button: {
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4CAF50', // A nice green color
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default Update_product;
