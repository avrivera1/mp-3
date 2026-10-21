import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <img src="/images/profile.jpg" alt="Anderson Rivera" />
      <p>
        My name is Anderson Rivera, and I am a Computer Science student at
        Boston University with hands-on experience in backend development,
        systems administration, and customer-facing problem-solving.
        I maintain a self-hosted Linux server and build full-stack projects
        integrating public APIs and embedded hardware.
      </p>
      <p>
        Welcome to my website, here you will find my <Link to="/education">Education</Link>{" "}
        and my <Link to="/employment">Employment</Link> history, my{" "}
        <Link to="/projects">Projects</Link>, as well as other information that
        might be of interest to you.
      </p>
      <p>Chelsea, MA &nbsp;|&nbsp; 857-237-9600 &nbsp;|&nbsp; andersonrivera728@gmail.com</p>
    </>
  );
}
