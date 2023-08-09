export default async function getUserDetails() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
}
