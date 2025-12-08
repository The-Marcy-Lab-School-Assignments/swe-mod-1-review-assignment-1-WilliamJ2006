const extractHashtags = (post) => {
  // Your code here
  const words = post.split(' ');
  return words.filter(word => {
    return word[0] === '#';
  })
}

console.log(extractHashtags("Love this #coding bootcamp! #javascript #WebDev"));
// ["#coding", "#javascript", "#WebDev"]

console.log(extractHashtags("No hashtags here"));
// []

console.log(extractHashtags("#First word #last-word and #middle123 word"));
// ["#First", "#last-word", "#middle123"]