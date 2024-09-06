import { useState } from "react";

export function About() {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      About
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
