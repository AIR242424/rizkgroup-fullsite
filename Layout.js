export default function Layout({ children }) {
  return (
    <div>
      <header>Rizk Group</header>
      <main>{children}</main>
      <footer>© 2025 Rizk Group</footer>
    </div>
  );
}