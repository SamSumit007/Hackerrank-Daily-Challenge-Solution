


function palindromeIndex(s) {
    if(s.length === 1){
        return -1;
    }
    
    const length = s.length;
    let index = 0;
    
    while(s.length > 1){
        if(s[0] !== s[s.length - 1]){
            const first = s.substring(1, s.length);
            if(first === first.split('').reverse().join('')){
                return index;
            }
            const second = s.substring(0, s.length -1);
            if(second === second.split('').reverse().join('')){
                return length - index - 1;
            }
        }else{
            s = s.substring(1, s.length - 1);
            index++;
        }
    }
    
    return -1;
}



// Alternate Solution


function palindromeIndex(s) {
    // Write your code here
       let mid   = Math.floor(s.length / 2);
    let start  = s.slice(0, mid);
    let end    = s.slice(0 - mid).split('').reverse().join('');

    if(start === end){
        return -1;
    } else {
        let position = 0;

        while(position < start.length){
            if(start[position] != end[position]){
                break;
            }
            position++;
        }

        let edit_start = start.split('');
        let edit_end   = end.split('');
        let middle     = s[mid];

        edit_start.splice(position, 1);
        edit_end.splice(position, 1);

        edit_start = edit_start.join('') + middle;
        edit_end   = edit_end.join('') + middle;

        if(start === edit_end){
            return s.length - position - 1;
        } else if(edit_start === end){
            return position;
        } else {
            return -1;
        }
    }
}
