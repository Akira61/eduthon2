export function Navbar() {
  return (
    <>
      <header className="navbar">
        {/* <img class="logo" src="assets/logo.png" alt="Logo"> */}
        <h1>
          <em>Eduval</em>
        </h1>
        <nav>
          <ul className="nav_links">
            <li>
              <a href="#">الصفحة الرئيسية</a>
            </li>
            <li>
              <a href="#">اتصل بنا</a>
            </li>
            <li>
              <a href="#">تسجيل الدخول</a>
            </li>
            <li>
              <a href="#">
                <button>التسجيل</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
