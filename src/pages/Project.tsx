import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export function Project() {
  // url => /projects/:projectId
  const { projectId } = useParams();
  const [URLSearchParams, setURLSearchParams] = useSearchParams();
  const [project, setProject] = useState<{ name: string } | null>(null);

  console.log(projectId);
  console.log(URLSearchParams.get("title"));

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${projectId}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((error) => {
        throw new Error(error);
      });
    setURLSearchParams({ title: "hello" });
  }, []);

  return (
    <div>
      <h1>Project {projectId}</h1>

      <Link to={`/projects/${projectId}/edit`}>Edit</Link>

      {project && <p>{project.name}</p>}
    </div>
  );
}
