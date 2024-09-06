import { useNavigate, useParams } from "react-router-dom";

export function ProjectEdit() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          // process the submission

          // redirect user to the project detail page

          navigate(`/projects/${projectId}`);
        }}
      >
        <input type="text" />
        <button>Submit</button>
      </form>
    </>
  );
}
