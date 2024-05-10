var sjcl = require("sjcl");
var plaintext = "大丈夫だ、問題ない";
var encrypted = sjcl.encrypt("password", plaintext);
console.log(encrypted);
var decrypted = sjcl.decrypt("password", encrypted);
console.log(plaintext == decrypted);
