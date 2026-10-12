(function(text) {
    let longestSubstring = '';
    let currentSubstring = '';
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charIndex = currentSubstring.indexOf(char);
      if (charIndex !== -1) {
        currentSubstring = currentSubstring.slice(charIndex + 1);
      }
  
      currentSubstring += char;
  
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
      }
    }
  
    return longestSubstring;
  })("sdfsxc")



  (function(str){
  let currStr='', longStr='';
  for(let i=0;i<str.length;i++){
    const char = str[i]
    const charIndex = currStr.indexOf(char)
    if(charIndex!==-1){
        currStr = currStr.slice(charIndex+1)
    }
    currStr+=char;
    if(currStr.length>longStr.length){
        longStr=currStr 
    }
  }
  return longStr
})("asddfgdfwerttyyuiiisfdhjkluu")


Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};
