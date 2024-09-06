import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState<{ name: string } | null>(null);

  console.log(projectId);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${projectId}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <div>
      <h1>Project {projectId}</h1>

      {project && <p>{project.name}</p>}
    </div>
  );
}
