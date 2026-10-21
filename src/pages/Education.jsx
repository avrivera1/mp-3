import Entry from "../components/Entry/Entry.jsx";

const SCHOOLS = [
  {
    title: "Boston University — B.S. in Computer Science",
    dates: "Expected Jun 2027",
    description:
      "Coursework emphasizing object-oriented design and software development fundamentals.",
  },
  {
    title: "Bunker Hill Community College — Dual Enrollment",
    dates: "Sep 2020 – May 2022",
    description:
      "Completed coursework in Python and Java while concurrently enrolled in high school. Collaborated on team coding projects; earned transferable college credit as a high school student.",
  },
  {
    title: "Charlestown High School — High School Diploma",
    dates: "Sep 2019 – Jun 2023",
    description:
      "Coursework in CSS, HTML, mobile app development, and cybersecurity fundamentals. Built teamwork and technical skills through group projects, workshops, and career-exploration activities.",
  },
];

export default function Education() {
  return (
    <>
      <h2>Education</h2>
      {SCHOOLS.map((school) => (
        <Entry key={school.title} {...school} />
      ))}
    </>
  );
}
