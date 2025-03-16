function displayLikes(names) {
  let msg;
  switch (names.length) {
    case 0:
      msg = `no one likes this`;
      break;
    case 1:
      msg = `${names[0]} likes this`;
      break;
    case 2:
      msg = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      msg = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      msg = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
      break;
  }
  return msg;
}

module.exports = displayLikes;
