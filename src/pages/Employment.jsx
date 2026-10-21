import Entry from "../components/Entry/Entry.jsx";

const JOBS = [
  {
    title: "Microcenter — Boston, MA",
    dates: "Retail Sales Associate / Merchandising | May 2025 – Present",
    bullets: [
      "Diagnose customer needs and match them to the right product, improving solution fit and customer satisfaction",
      "Developed repeatable workflows for common customer requests, improving consistency across the sales floor",
    ],
  },
  {
    title: "Tech Networks of Boston — Boston, MA",
    dates: "Tech Intern | Jul 2023 – Sep 2023",
    bullets: [
      "Analyzed and triaged support tickets, reporting findings directly to leadership",
      "Entered and organized roughly 70 data records in the Roost AI ticketing system, improving ticket-gathering efficiency",
    ],
  },
  {
    title: "Timothy Smith Networking — Boston, MA",
    dates: "Tech Intern | Jul 2023 – Sep 2023",
    bullets: [
      "Designed a prototype health-monitoring device with pulse-tracking functionality",
      "Partnered closely with a small technical team to plan and implement device features",
    ],
  },
];

export default function Employment() {
  return (
    <>
      <h2>Employment</h2>
      {JOBS.map((job) => (
        <Entry key={job.title} {...job} />
      ))}
    </>
  );
}
