import Keycloak from "keycloak-js";

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  nickname: string | undefined
  keycloak: Keycloak
}> {
  const keycloak: Keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'example',
    clientId: 'example',
  });
  let nickname;
  const auth = await keycloak.init({onLoad: 'login-required'});
  console.log('auth', auth);
  if (!auth) {
    window.location.reload();
  } else {
    nickname = keycloak.tokenParsed?.preferred_username;
  }
  return {
    nickname,
    keycloak,
  };
}