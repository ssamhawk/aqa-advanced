const averageGrade = 101;

if (averageGrade>= 0 && averageGrade<=100){
    if (averageGrade >= 91) {
        console.log('Відмінно');
        }else if (averageGrade >= 81) {
            console.log('Дуже добре');
                }else if (averageGrade >= 71) {
                    console.log('Добре')
                    }else if (averageGrade >= 60) {
                        console.log('Задовільно')
                        }else {
                            console.log('Незадовільно');
                        }
}else{
    console.log('Оцінка має бути числом від 0 до 100');
}


