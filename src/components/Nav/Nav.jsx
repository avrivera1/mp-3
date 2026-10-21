import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/employment", label: "Employment" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/references", label: "References" },
];

export default function Nav() {
  return (
    <nav>
      <ul>
        {LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} end>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
