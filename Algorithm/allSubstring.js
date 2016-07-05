/*
Returns all substrings that appear in a string for example
allSubstring("rain") would result in ["r", "ra", "rai", "rain", "a", "ai", "ain", "i", "in", "n"]
*/
function allSubstring(str) {
   var len = str.length,
      retArr = [];

   for(var i = 0; i < len; i++) {
      for(var j = i + 1; j <= len; j++) {
         retArr.push(str.slice(i, j));
      }
   }
   return retArr;
}