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
