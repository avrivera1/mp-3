import Calculator from "../components/Calculator/Calculator.jsx";

const PROJECTS = [
  "Deployed and maintain a headless Debian Linux server, accessible over SSH, hosting personal projects and backend services",
  "Building a Go backend that integrates the MBTA API to deliver real-time transit predictions from GPS coordinates",
  "Developing a client-server system that pushes nearby bus-arrival data to an ESP32-based wearable display",
];

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <p>
        Selected projects, built to explore backend development, public APIs,
        and embedded hardware.
      </p>
      <ul>
        {PROJECTS.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <Calculator />
    </>
  );
}
