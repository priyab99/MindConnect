

const ContactUs = () => {
    
  return (
    <div className="container mx-auto pt-20"><div  style={styles.contactUsContainer}>
    <h2 style={styles.contactUsHeader}>Contact Us</h2>
    <p>
      If you have any questions or concerns, please feel free to reach out to us. We are here to help!
    </p>
    <form style={styles.contactForm}>
      <label htmlFor="name" style={styles.boldLabel}>Name:</label>
      <input type="text" id="name" name="name" style={styles.input} required />

      <label htmlFor="email" style={styles.boldLabel}>Email:</label>
      <input type="email" id="email" name="email" style={styles.input} required />

      <label htmlFor="message" style={styles.boldLabel}>Message:</label>
      <textarea id="message" name="message" rows="4" style={styles.input} required></textarea>

      <button type="submit" style={styles.button}>Submit</button>
    </form>
  </div></div>
  );
};

const styles = {
  contactUsContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactUsHeader: {
    fontWeight: 'bold',
    color: '#007bff', // Blue color
  },
  boldLabel: {
    marginBottom: '5px',
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default ContactUs;