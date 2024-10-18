import { useRouter } from "next/router"
import MainComponent from "../../components/MainComponent";

export default function ({ user }) {

  const { query } = useRouter();

  return (
    <MainComponent keywords={`This is User ${user.name}`}>
      <h1>
        User with id: {query.id}
      </h1>
      <div>
        User name: {user.name}
      </div>
    </MainComponent>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: { user }
  }
}
