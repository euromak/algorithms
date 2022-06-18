let my_list = [1,5,8,15,20,34,57];

function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;
    let big_O = 0;

    // в переменных low и high хранятся границы той части списка, в которой выполняется поиск

    while(low <= high) { // пока эта часть не сократится до одного элемента..

        let mid = Math.round((low + high) / 2); // проверка на средний элемент
        let guess = list[mid];
        big_O++;

        console.log("low: " + low, "high: " + high, "mid:" + mid, "guess: " + guess);

        if(guess == item) { // значение найдено
            console.log('big_O = ' + big_O);
            return mid; // алгоритм возвращает индекс загаданного числа
        } else if(guess > item) { // много
            high = mid -1; // мало
        } else {
            low = mid +1;
        }
    }

    return null;
}

console.log(binary_search(my_list, 57));
