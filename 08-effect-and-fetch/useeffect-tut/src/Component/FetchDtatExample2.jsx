import { useEffect, useState } from "react";
const URL = "https://jsonplaceholder.typicode.com/users";

function FetchDtatExample2() {
  const [users, setUsers] = useState([]);
  const FetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div>
      <h1>Data</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
        </tr>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FetchDtatExample2;
