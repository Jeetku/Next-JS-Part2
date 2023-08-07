async function usersList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function Page() {
  let users = await usersList();
  console.log(users);
  return (
    <div>
      <h1>User Name List</h1>
      {users.map((item) => (
        <div key={item.id}>
          <h2>
            User Name: <span>{item.firstName}</span>
          </h2>
        </div>
      ))}
    </div>
  );
}
