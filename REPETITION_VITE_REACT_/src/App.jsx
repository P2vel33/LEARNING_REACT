import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([
    { id: 1, name: "JS", description: "JS JS JS" },
    { id: 2, name: "JS", description: "JS JS JS" },
    { id: 3, name: "JS", description: "JS JS JS" },
    { id: 4, name: "JS", description: "JS JS JS" },
    { id: 5, name: "JS", description: "JS JS JS" },
  ]);

  return (
    <>
      <div className="posts">
        <div className="post_item">
          {posts.forEach((element) => (
            <div>
              <p>
                {element.id}. {element.name}
              </p>
              <p>{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
