/*No Repeats Please - FCC advanced algorithm challenge:

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/
function permAlone(str) {
  var arr = str.split('');
  //console.log(arr); 
  var result = 0;
  
  function swap(a,b){
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }//end function swap
  
  function makePerms(n){
    var regx = /([a-z])\1+/;
    
    if (n === 1 && !regx.test(arr.join(''))){
      result++;
      //console.log(result);
    }else {
      for (var i = 0; i !== n; i++){
        makePerms(n-1);
        swap(n % 2 ? 0 : i, n-1);
      }//end for i resutsive loop
    }//end if else
    
  }//end function makePerms
  makePerms(arr.length);
  //console.log(result);
  return result;
}

permAlone('arbty');