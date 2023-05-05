import Keycloak from 'keycloak-js'
import {useModel} from "umi";

export default function HomePage() {
  const {initialState} = useModel('@@initialState') ?? {};
  console.log('initialState', initialState)
  return (
    <div>
      <h1>{initialState?.nickname}</h1>
      <button onClick={() => {
        console.log('keycloak对象', initialState?.keycloak);
        console.log('nickname', initialState?.nickname);
      }}>Login</button>
      <button onClick={() => {
        initialState?.keycloak.logout();
      }}>Logout</button>
    </div>
  );
}
