import { useEffect, useState } from "react";
import axios from 'axios'
function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [activ, setActiv] = useState(0)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => { setUsers(res.data) })

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => { setPosts(res.data) })
  }, []);
  function handleClick(id) {
    setActiv(id)
  }
  const filter = posts.filter((post) => (post.userId == (activ)))
  return (
    <div className="App">
      <h1>list of Users</h1>
      {users.map((user) => {
        return (<p>
          {user.name}
          <button onClick={() => handleClick(user.id)}>More details</button>
          <div>
            {activ === user.id
              ? <ul>
                {filter.map((post) => {
                  return <li>{post.id}{post.title}</li>
                })}
              </ul>
              : null
            }
          </div>
        </p>)
      })
      }
    </div>
  );
}

export default App;
