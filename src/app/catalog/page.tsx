
export default async function Catalog() {
await new Promise ((resolve) => setTimeout(resolve, 2000))
const response = await fetch('https://api.github.com/users/orpinelli')
const user = await response.json()

  return (
      <pre>
        AQUI é o catalogo
        {JSON.stringify(user, null, 2)}
      </pre>
  );
}
