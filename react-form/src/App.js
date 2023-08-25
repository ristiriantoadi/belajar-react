import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState(null);
  const [selection, setSelection] = useState("two");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const blog = {
            title,
            body,
            selection,
          };
          console.log(blog);
        }}
      >
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label>Content</label>
        <textarea
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        >
          {body}
        </textarea>
        <label>Select</label>
        <select
          value={selection}
          onChange={(e) => {
            setSelection(e.target.value);
          }}
        >
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
