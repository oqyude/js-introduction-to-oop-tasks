// BEGIN
export const getMutualFriends = (user1, user2) => {
  const user2Friends = user2.getFriends();

  return user1.getFriends().filter((friend1) => (
    user2Friends.some((friend2) => friend2.id === friend1.id)
  ));
};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});
