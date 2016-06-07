// Returns all substrings that appear in a string for example
// allSubstring("rain") would result in ["r", "ra", "rai", "rain", "a", "ai", "ain", "i", "in", "n"]
function allSubstring(str) {
   var iLen = str.length,
      retArr = [];

   for(var i = 0; i < iLen; i++) {
      for(var j = 1, jLen = iLen - i; j <= jLen; j++) {
         retArr.push(str.slice(i, i + j));
      }
   }
   return retArr;
}