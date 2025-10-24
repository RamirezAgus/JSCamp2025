const NavBar = () => {
  return (
    <header>
      <h2>DevJobs</h2>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Empleos</a>
        <a href="#">Empresas</a>
        <a href="#">Salarios</a>
      </nav>
      <div className="user-actions">
        <a href="#" className="secondary-button">
          Subir CV
        </a>
        <div className="profile">
          <devjobs-avatar
            service="google"
            username="google.com"
            size="32"
          ></devjobs-avatar>

          <devjobs-avatar
            service="google"
            username="netflix.com"
            size="32"
          ></devjobs-avatar>

          <devjobs-avatar
            service="google"
            username="vercel.com"
            size="32"
          ></devjobs-avatar>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
