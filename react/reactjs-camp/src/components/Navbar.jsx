import { Link } from "react-router";


const NavBar = () => {
  return (
    <header>
      <h2>DevJobs</h2>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/job-search">Empleos</Link>
        <a href="#">Empresas</a>
        <a href="#">Salarios</a>
      </nav>
      <div>
        <a href="#">
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
