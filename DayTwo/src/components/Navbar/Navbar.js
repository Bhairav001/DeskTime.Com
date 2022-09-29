import "./NavbarStyles.css";
function Navbar() {
  return (
    <>
      <nav>
        <a href="index.html" id="img">
          <img
            style={{ width: "40px" }}
            src="https://static.crozdesk.com/web_app_library/providers/logos/000/006/967/box/desktime-1643207163-logo.png?1643207163"
            alt="logo-error"
          />
          <h3>DeskTime</h3>
        </a>
        <div id="topNav">
          <ul id="navbar">
            <li>
              <a href="index.html">Demo</a>{" "}
            </li>
            <li>
              <a href="index.html">Features</a>{" "}
            </li>
            <li>
              <a href="index.html">Pricing</a>{" "}
            </li>
            <li>
              <a href="index.html">About us</a>{" "}
            </li>
            <li>
              <a href="index.html">FAQ</a>{" "}
            </li>
            <li>
              <a href="index.html">Blog</a>{" "}
            </li>
          </ul>

          <div id="btn">
            <button
              style={{
                width: "80px",
                padding: "8px",
                color: "white",
                background: "green",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: "bold"
              }}
            >
              LOGIN
            </button>
            <button
              style={{
                width: "80px",
                padding: "8px",
                color: "white",
                background: "green",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: "bold"
              }}
            >
              SIGN UP
            </button>
          </div>
        </div>
        {/* <div id="mobile">
         <i className="fas fa-bars">rgd</i>
       </div> */}
        {
          <select id="select">
            <option>English</option>
            <option>Marathi</option>
            <option>Hindhi</option>
          </select>
        }
      </nav>
    </>
  );
}
export default Navbar;
