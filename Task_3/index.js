//Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод checkIsEmail() параметром принимает строку и проверяет, является ли она емейлом или нет. 
//Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод checkIsDomain для проверки домена, 
//метод checkIsDate для проверки даты и метод checkIsPhone для проверки телефона:

class Validator {
  checkIsEmail(value) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(validRegex)) {
      return true
    }
    else {
      return false
    }
  }

  checkIsDomain(value) {
    const validRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
    if (value.match(validRegex)) {
      return true
    }
    else {
      return false
    }
  }

  checkIsDate(value) {
    const date = value.split(".")
    const day = date[0];
    const month = date[1];
    const year = date[2];

    if (day > 31 || month > 12 || year > new Date().getFullYear()) {
      return false
    } else {
      return true
    }
  }

  checkIsPhone(value) {
    const validRegex = /^[\+|\s]?38[(|\s]{0,2}\d{3}[)|\s]{0,2}\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
    if (value.match(validRegex)) {
      return true
    }
    else {
      return false
    }
  }
}

var validator = new Validator();

console.log(validator.checkIsEmail("vasya.pupkin@gmail.com")); 
console.log(validator.checkIsDomain("google.com")); 
console.log(validator.checkIsDate("30.11.2019")); 
console.log(validator.checkIsPhone("+38 (066) 937-99-92")); 