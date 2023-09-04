function solution(my_string, index_list) {
    var answer = [];
    my_string = my_string.split('');
    for(let i = 0; i < index_list.length; i++){
        const val = index_list[i];
        answer.push(my_string[val]);
    }
    return answer.join('');
}