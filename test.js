/// <reference path="code1.js" />

test("hello there", function(){
  console.log(hello);
  console.log(bye);
  equal("hello",hello);
  equal("bye",bye);
});