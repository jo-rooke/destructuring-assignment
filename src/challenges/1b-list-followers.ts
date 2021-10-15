function listFollowers(followerNames: string[]): string {
  // complete function
  // use array destructuring, for practice!
  const [firstFollower, secondFollower] = followerNames
  return (`Followed by ${firstFollower}, ${secondFollower} and others`)
  //return "fails test right now";
}

export default listFollowers;
