import Link from "next/link";
import getUserDetails from "../../../services/getUserDetails";
export default async function Page() {
  const getUserList = getUserDetails();
  const users = await getUserList;
  console.log(users);
  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </div>
  );
}
