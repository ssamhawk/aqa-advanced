const averageGrade = 9;

switch (true) {
  case averageGrade >= 91 && averageGrade <= 100:
    console.log('Відмінно');
    break;
  case averageGrade >= 81 && averageGrade < 91:
    console.log('Дуже добре');
    break;
  case averageGrade >= 71 && averageGrade < 81:
    console.log('Добре');
    break;
  case averageGrade >= 60 && averageGrade < 71:
    console.log('Задовільно');
    break;
  case averageGrade <= 60 && averageGrade >= 0:
    console.log('Незадовільно');
    break;
  default:
    console.log('Оцінка має бути числом від 0 до 100');
}
