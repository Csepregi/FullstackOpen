const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  let result = 0;
  blogs.forEach(function (arrayItem) {
    result += arrayItem.likes;
    console.log(result);
});
  return result;
}

const favouriteBlog = (blogs) => {
  if (!blogs.length) return 'No blogs yet'
  const favorite = blogs.sort((a, b) => b.likes - a.likes)
  const result =  { 
    title: favorite[0].title, 
    author: favorite[0].author, 
    likes: favorite[0].likes }
  return result
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}