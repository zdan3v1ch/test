
import Link from "next/link";
import MainComponent from "../components/MainComponent";


const Users = ({ users }) => {





  return (
    <MainComponent keywords={'List of users'}>
      <h1>
        List of users
      </h1>
      <ul>
        {
          users.map((user) =>
            <li key={user.id}>
              <Link legacyBehavior href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>

            </li>
          )
        }
      </ul>
    </MainComponent>
  );
};

export default Users;


export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: { users }
  }
}
