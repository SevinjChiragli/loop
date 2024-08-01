// 1. Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.
// let start = +prompt("Enter start number");
// let end = +prompt("Enter end number");
// let sum = 0;
// for (let i = start; i < end; i++) {
//   sum += i;
// }
// alert("this number is" + sum);


// 2. Запросить 2 числа и найти только наибольший общий
// делитель.
// let first = +prompt("Enter first number");
// let second = +prompt("Enter second number");
// while (second !== 0) {
//   let temp = second;
//   second = first % second;
//   first = temp;
// }
// alert(first);


// 3. Запросить у пользователя число и вывести все делители
// этого числа.
// let num = +prompt('Enter the number');
// let divisors = '';
// for (let i = 1; i<=5
//     num; i++){
//     if (num%i==0){
//         divisors+=i+' '
//     }
// }
// alert(divisors);


// 4. Определить количество цифр в введенном числе.
// let number = +prompt("Enter the number");
// let a = 0;
// while (number !== 0) {
//   number = Math.floor(number / 10);
//   a++;
// }
// alert(a);


// 5. Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем
// let positive= 0;
//     let negative= 0;
//     let zero=0;
//     let even =0;
//     let odd = 0;
// for(let i =1;i<=10;i++){
//     let number=+prompt('Enter 10 numbers');
//     if (number>0){
//         positive++
//     }
//     else if(number<0){
//         negative++
//     }
//     else {zero++}
//     if (number%2==0){
//         even++
//     }
//     else{odd++}
// }
// alert('positive:'+ positive+ '\nnegative:'+ negative+ '\nzero:'+zero+ '\neven:'+even+ '\nodd:'+odd);


// 6. Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.
// do {
//   let first = +prompt("enter first number");
//   let second = +prompt("enter second number");
//   let symbol = prompt("enter symbol");
//   let result = 0;
//   switch (symbol) {
//     case "+":
//       result = first + second;
//       break;
//     case "-":
//       result = first - second;
//       break;
//     case "*":
//       result = first * second;
//       break;
//     case "/":
//       result = first / second;
//       break;
//   }
//   alert("result:" + result);
//   let answer = prompt("do you want to continue?");
//   if (answer == "yes") continue;
//   else {
//     break;
//   }
// } while (true);

// 7. Запросить у пользователя число и на сколько цифр его
// сдвинуть. Сдвинуть цифры числа и вывести результат (если
// число 123456 сдвинуть на 2 цифры, то получится 345612).


// 8. Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK.
// let currentDay = 1;
// while (true) {
//   switch (currentDay) {
//     case 1:
//       alert("Monday");
//       break;
//     case 2:
//       alert("Tuesday");
//       break;
//     case 3:
//       alert("Wednesday");
//       break;
//     case 4:
//       alert("Thursday");
//       break;
//     case 5:
//       alert("Friday");
//       break;
//     case 6:
//       alert("Saturday");
//       break;
//     case 7:
//       alert("Sunday");
//       break;
//   }

//   let answer = prompt("Do you want continue? (yes/no)");

//   if (answer == "yes") {
//     currentDay++;
//   } else {
//     break;
//   }
// }


// 9. Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }
