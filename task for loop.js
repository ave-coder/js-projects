// Задача 1. Выведите столбец чисел от 1 до 50

let a = 1;

while (1 < 51) {
    console.log(a);
    a++;
}

// Задача 2. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран

let arr = [1, 2, 3, 4, 5];

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задача 3. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива

let arr = [2, 3, 4, 5];
sum = 1;

for (i = 0; i < arr.length; i++) {
    sum *= arr[i];
}
console.log(sum);

/*Задача 4. Дан объект obj с ключами 'Минск', 'Москва' с элементами 'Беларусь', 'Россия'.
 С помощью цикла for-in выведите на экран строки такого формата: 'Москва — это Россия' */

let obj = {
    Минск: 'Беларусь',
    Москва: 'Россия'
}

for (key in obj) {
    console.log(key + ' - это ' + obj[key])
}

// Задача 5. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);


/* Задача 6. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов' */

let obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}

for (const elem in obj) {
    console.log(`${elem} - зарплата ${obj[elem]} долларов`)
}

// Задача 7. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива

let arr = [1, 3, 5, -2, 21, -10];
let sum = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
console.log(sum);

/*Задача 8. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо. 
*/

let arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        console.log('Есть!');
        break;
    }
}

//Задача 9. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. 

let arr = [10, 20, 30, 50, 235, 3000];

for (i = 0; i < arr.length; i++) {
    let str = String(arr[i])
    if (str.startsWith('1') || str.startsWith('2') || str.startsWith('5')) {
        console.log(str);
    }
}

// Задача 10. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'. 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = '';

for (i = 0; i < arr.length; i++) {
    str += '-' + arr[i];
}
console.log(str);

// Вариант без цикла for

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = arr.join('-');

console.log(str);


// Задача 11. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным. 

let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (i = 0; i < days.length; i++) {
    if (days[i] == 'Sat' || days[i] == 'Sun') {
        let weekend = days[i];
        console.log(`<b>${weekend}</b>`);
    } else {
        console.log(days[i]);
    }
}

/* Задача 12. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом.
Текущий день должен храниться в переменной day */

let week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let day = new Date;

for (i = 0; i < week.length; i++) {
    if (i == day.getDay()) {
        console.log(`<i>${week[i]}<i>`);
    } else {
        console.log(week[i]);
    }
}

/* Задача 13. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
Какое число получится? Посчитайте количество итераций, необходимых для этого, и запишите его в переменную num */

let num = 1000;
let count = 0;

while (num > 50) {
    num = num / 2;
    count++;
}

console.log(num);
console.log(count);

// Задача 14. При помощи цикла for выведите чётные числа от 2 до 10. 

for (i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log('Четные числа ' + i)
    }
}

// Второй вариант 

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log('Четные числа ' + arr[i]);
    }
}

/* Задача 15. Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. 
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC). 
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно */

do {
    num = prompt("Введите число больше 100: ", "");
} while (num <= 100 && num != null)

// Задача 16. Напишите программу, которая принимает два целых числа и отображает большее. 


const func = () => {
    let count = parseInt(prompt('Введите первое число: '));
    let count2 = parseInt(prompt('Введите второе число: '));

    if (count > count2) {
        console.log('Первое число ' + count + ' больше,чем ' + count2);
    } else {
        console.log('Второе число ' + count2 + ' больше,чем ' + count);
    }
}

func()

// Задача 17. Используйте условный оператор для сортировки трех чисел по убыванию. 

let a = parseInt(prompt('Введите первое число: '));
let b = parseInt(prompt('Введите второе число: '));
let c = parseInt(prompt('Введите третье число: '));

if (a > b && a > c) {
    if (b > c) {
        console.log(a + ',' + b + ',' + c)
    } else {
        console.log(a + ',' + c + ',' + b)
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(b + ',' + a + ',' + c)
    } else {
        console.log(b + ',' + c + ',' + a)
    }
} else if (c > a && c > b) {
    if (a > b) {
        console.log(c + ',' + a + ',' + b)
    } else {
        console.log(c + ',' + b + ',' + a)
    }
}

// Задача 18. Напишите цикл for, который будет повторяться от 0 до 15. Для каждой итерации он будет проверять, является ли текущее число четным или нечетным. 


for (i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log('Число ' + i + ' четное');
    } else {
        console.log('Число ' + i + ' нечетное');
    }
}

/* Задача 19. Напишите программу, которая вычисляет количество баллов следующих учеников. Затем эти баллы используются для определения квалификации.
Степан: баллы (80), Игнат баллы (77), Денис баллы (88), Иван баллы (95), Радион баллы (68). Квалификации: <60 – F, <70 – D, <80 – C, <90 – B, <100 – А */

const users = { Степан: 80, Игнат: 77, Денис: 88, Иван: 95, Радион: 68 };

for (let value of Object.values(users)) {
    if (value >= 60 && value < 70) {
        console.log('Квалификация F');
    } else if (value >= 70 && value < 80) {
        console.log('Квалификация D');
    } else if (value >= 80 && value < 90) {
        console.log('Квалификация C');
    } else if (value >= 90 && value < 100) {
        console.log('Квалификация B');
    } else if (value <= 100) {
        console.log('Квалификация D');
    }
}

/* Задача 20. Создание фигуры треугольника с использованием вложенного цикла. Напишите программу для построения фигуры, используя вложенный цикл for.
   *
   **
   ***
   ****
   *****
*/

let figure = '';
let line = '';

for (i = 1; i < 6; i++) {
    line = '';
    for (x = 0; x < i; x++) {
        line += '*';
    }
    figure += line + '\n';
}

console.log(figure);