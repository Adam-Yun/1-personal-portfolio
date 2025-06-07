import Introduction from "./components/Introduction/introduction"
import "./page.css"

export default function Home() {
  return (
    <div className="home-box">
      <main className="main-box">
        <Introduction/>
      </main>
      <footer className="footer-box">
      </footer>
    </div>
  );
}
