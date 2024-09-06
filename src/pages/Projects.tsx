import { useSearchParams } from "react-router-dom";

const PROJECTS = [
  { id: 1, title: "abc" },
  { id: 2, title: "project1" },
  { id: 3, title: "project2" },
  { id: 4, title: "project3" },
  { id: 5, title: "project4" }
];

export function Projects() {
  const [URLSearchParams] = useSearchParams();

  const title = URLSearchParams.get("title");

  return (
    <ul>
      {PROJECTS.filter((project) => project.title.includes(title!)).map(
        (project) => (
          <li>{project.title}</li>
        )
      )}
    </ul>
  );
}
