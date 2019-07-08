'use strict';

function collectSameElements(collectionA, collectionB) {
  /* const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  const collectionB = ['a', 'd', 'e', 'f']; */ 
  var result="[]";
  for(var ch=0;collectionA[ch]!="\n";ch++)
  {
       for(var ch1=0;collectionB[ch1]!="\n";ch1++)
       {
           if(collectionA[ch]==collectionB[ch1])
           {
              result[ch]=collection[ch];
           }
       }
  }
    return result;
}
