import { useState } from "react";
import { useGetPostQuery, useNewPostMutation } from "./redux/api";
function App() {
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");
  const { isLoading, data } = useGetPostQuery("");
  const [newPost] = useNewPostMutation();
  console.log(isLoading, data);

  const submitData = (event) => {
    event.preventDefault();
    const post = {
      title,
      views,
      id: Math.random() * 1000,
    };
    newPost(post);
    setTitle("")
    setViews("");
  };

  return (
    <>
      <h1>Working</h1>
      <div>
        <form onSubmit={submitData}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.map((element, index) => {
            return (
              <div key={index}>
                <p>{element.id}</p>
                <p>{element.title}</p>
                <p>{element.views}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
