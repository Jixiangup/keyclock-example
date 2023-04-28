export default function (initialState: {nickname: string}) {
  const { nickname } = initialState ?? {};
  console.log(nickname)
  return {
    nickname,
  };
}