function solution(phone_book) {
    phone_book.sort()
    
    for(let i = 0; i < phone_book.length; i++) {
        if(i === phone_book.length - 1) return true;
        if(phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)) {
            return false;
        }
    }
}
