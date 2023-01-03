class CustomString {
  reverse(string) {
    let stringArr = string.split("");
    let reverseStringArr = [];

    for (const letter of stringArr) {
      reverseStringArr.unshift(letter);
    }

    return reverseStringArr.join("");
  }

  ucFirst(string) {
    let stringArr = string.split("");
    let ucFirstStringArr = [];

    ucFirstStringArr.push(stringArr[0].toUpperCase());

    for (const letter of stringArr) {
      if (stringArr.indexOf(letter) === 0) {
        continue;
      }
      ucFirstStringArr.push(letter);
    }

    return ucFirstStringArr.join("");
  }

  ucWords(string) {
    const stringArr = string.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
   
    return stringArr;
  }
}

const myString = new CustomString();

console.log(myString.reverse("qwerty"));
console.log(myString.ucFirst("qwerty"));
console.log(myString.ucWords("qwerty qwerty qwerty"));
