// Задача  - создать класс Student который принимает аргументом в конструкторе объект enrollee (абитурент). У экземпляра класса Student должны быть поля:
//id - уникальный идентификатор студента (генерируется при создании экземпляра и начинается с 1);
// name - имя студента (передаем в объекте enrollee);
// surname - фамилия студента (передаем в объекте enrollee);
// ratingPoint - рейтинг студента по результатам вступительных экзаменов (передаем в объекте enrollee);
// schoolPoint - рейтинг студента по результатам ЗНО (передаем в объекте enrollee);
// isSelfPayment - если true, то студент на контракте, если false - на бюджете (генерируется по логике указанной ниже).
//Id генерируется автоматически при создании экземпляра Student. isSelfPayment определяется по параметру "ratingPoint". Если ratingPoint больше или равен 800, то студент может быть на бюджет, 
//но бюджет он может получить только если его "ratingPoint" не меньше чем у других студентов в массиве. Студентов которые на бюджете не должно быть больше чем 5 в массиве. 
//То есть если "ratingPoint" больше чем хоть у одного из 5 бюджетников то мы присваиваем isSelfPayment = false. И в этот момент студент из массива который имел isSelfPayment = false, 
//но его ratingPoint меньше чем у остальных 5 бюджетников, с нашим включительно, то ему делаем isSelfPayment = true, то есть переводим этого неудачника на контракт. 
//Что делать если у 6-рых студентов баллы 1000? Ну имеется ввиду, если 2 человека с одинаковыми баллами ratingPoint борются за 5 бюджетное место? В таком случае смотрим на schoolRating, у кого он больше тот и на бюджете.


class Student {
  static ID = 1;
  static listOfStudents = [];

  constructor(enrollee) {
    this.id = Student.ID++;
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
    this.isSelfPayment = true;
    Student.listOfStudents.push(this);
    Student.filterBySelfPayment();
  }

  static filterBySelfPayment() {
    const sudentsWithHighRating = [];

    for (const student of Student.listOfStudents) {
      student.isSelfPayment = true;
      if (student.ratingPoint >= 800) sudentsWithHighRating.push(student);
    }

    if (sudentsWithHighRating.length > 5) {
      sudentsWithHighRating.sort((a, b) => {
        if (a.ratingPoint === b.ratingPoint) {
          if (a.schoolPoint === b.schoolPoint) {
            return 0;
          } else if (a.schoolPoint < b.schoolPoint) {
            return 1;
          } else if (a.schoolPoint > b.schoolPoint) {
            return -1;
          }
        } else if (a.ratingPoint < b.ratingPoint) {
          return 1;
        } else if (a.ratingPoint > b.ratingPoint) {
          return -1;
        }
      });

      sudentsWithHighRating.length = 5;
    }
    
    for (const student of sudentsWithHighRating) {
      student.isSelfPayment = false;
    }
  }
}

const studentArray = (arr) => {
  const studentArray = [];

  for (const student of arr) {
    studentArray.push(new Student(student));
  }

  return studentArray;
};

const studentsArr = studentArray(studentArr);

console.log(studentsArr);
