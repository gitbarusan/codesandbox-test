/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
//私の名前はじゃけぇです。年齢は28歳です。
//従来
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
//　従来の関数
// function func1(str) {
//   return str;
// }
//無名関数
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
  return str;
};

console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

/**
 * 分割代入
 */
const myProfile = {
  name: "はるこ",
  age: 41
};

const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message3);

//name,ageというconstが別で宣言されているとエラーになる
const { name, age } = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);

const myProfile2 = ["じゃけぇ", 28];
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(message5);

//配列の場合第１引数に0番目の要素、第２引数に1番目の要素が入る
const [namae2, age2] = myProfile2;
const message6 = `名前は${namae2}です。年齢は${age2}です。`;
console.log(message6);
