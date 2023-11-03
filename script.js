// Напишите функцию, которая убирает повторяющиеся значения.Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// let b = [1, 2, 3]
// console.log(b.sort((a, b) => a > b ? -1 : 1))


//Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// let arr = [0, 1, false, 2, undefined, '', 3, null]
// let a = arr.filter(item => typeof item === 'number' && !isNaN(item));
// console.log(a)


//Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат:
// [1, 2, 3, 1, 2] => [1, 2, 3]
// let a = [1, 2, 3, 1, 2];
// console.log([...new Set(a)]);


//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6
//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let a = [1 ,2, 3]
// let b = [4, 5, 6]
// console.log([...a, ...b])
// console.log([...b, ...a])




// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// let arr = {
//         js: 'test',
//         jq: 'hello',
//         css: 'hello'
//     }
//
// console.log(Object.keys(arr) )


//Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
// let a = ['Капуста', 'Репа', 'Редиска', 'Морковка']
// console.log(a.join(', '))


// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]
// function toggleCase(inputString) {
//
//     let result = '';
//
//     for (let i = 0; i < inputString.length; i++) {
//         const char = inputString[i];
//
//
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }
//
//     return result;
// }
//
// const inputString = "КаЖдЫй ОхОтНиК";
// const toggledString = toggleCase(inputString);
// console.log(toggledString);