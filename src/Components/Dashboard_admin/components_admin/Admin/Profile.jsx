import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const [admin, setAdmin] = useState([])

    useEffect(() => {
        info_admin()
    }, []);

    async function info_admin() {

        let res = await fetch("http://127.0.0.1:8000/api/info_admin");
        let data = await res.json();
        setAdmin(data)
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
            <div style={styles.container}>
    {admin.map((admin) => (
      <h1 style={styles.heading} key={admin.id}>Hello {admin.full_name}</h1>
    ))}
    <table style={styles.table}>
      <thead>
        <tr>
          <th colSpan={6} style={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.td}><Link to="/add" style={styles.link}>Add Product</Link></td>
          <td style={styles.td}><Link to="/update_product" style={styles.link}>Update Product</Link></td>
          <td style={styles.td}><Link to="/delete_product" style={styles.link}>Delete Product</Link></td>
          <td style={styles.td}><Link to="/add_categories" style={styles.link}>Add Categories</Link></td>
          <td style={styles.td}><Link to="/add_flavors" style={styles.link}>Add Flavors</Link></td>
          <td style={styles.td}><Link to="/Show_orders" style={styles.link}>Show Orders</Link></td>
        </tr>
      </tbody>
    </table>
  </div>
    </>
  )
}

const styles = {
    container: {
      maxWidth: '960px',
      margin: ' -20px auto',
      padding: '40px',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
    },
    heading: {
      textAlign: 'center',
      color: '#34495e',
      marginBottom: '30px',
      fontSize: '32px',
      fontWeight: '600',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
      backgroundColor: '#ffffff',
    },
    th: {
      backgroundColor: '#2c3e50',
      color: '#ffffff',
      padding: '15px 20px',
      fontSize: '18px',
      fontWeight: '500',
    },
    td: {
      textAlign: 'center',
      padding: '12px 15px',
      borderBottom: '1px solid #ddd',
      color: '#2c3e50',
      fontSize: '16px',
    },
    link: {
      display: 'inline-block',
      padding: '10px 15px',
      textDecoration: 'none',
      color: '#3498db',
      fontWeight: 'bold',
      borderRadius: '4px',
      transition: 'background-color 0.3s, color 0.3s',
      '&:hover': {
        backgroundColor: '#2980b9',
        color: '#ffffff',
      },
    },
    linkButton: {
      background: '#3498db',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
      '&:hover': {
        background: '#2980b9',
      },
    }
  };
export default Profile
