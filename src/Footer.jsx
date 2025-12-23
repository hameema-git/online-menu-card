export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>
          Built with ❤️ by <strong>CodeLeaf</strong>
        </div>

        <div style={styles.links}>
          <a
            href="https://codeleaf.co.in"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            Website
          </a>

          <span style={styles.dot}>•</span>

          <a
            href="https://wa.me/918075159094"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            WhatsApp
          </a>
        </div>

        <div style={styles.copy}>
          © {new Date().getFullYear()} CodeLeaf. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 40,
    padding: "24px 16px",
    background: "rgba(0,0,0,0.15)",
    color: "#ffffff",
    fontFamily: "system-ui"
  },
  inner: {
    maxWidth: 1200,
    margin: "auto",
    textAlign: "center"
  },
  brand: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 8
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    fontSize: 14,
    marginBottom: 8,
    flexWrap: "wrap"
  },
  link: {
    color: "#ffd166",
    textDecoration: "none",
    fontWeight: 600
  },
  dot: {
    opacity: 0.6
  },
  copy: {
    fontSize: 12,
    opacity: 0.75
  }
};
