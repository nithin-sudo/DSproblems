function month(number){
    switch (number) {
        case 1: 
			return 'january';
        case 2: 
			return 'february';
        case 3: 
			return 'march'; 
        case 4: 
			return 'april';
        case 5: 
			return 'may'; 
        case 6: 
			return 'june'; 
        case 7:
			return 'july';
        case 8: 
			return 'august'; 
        case 9: 
			return 'september'; 
        case 10: 
			return 'october'; 
        case 11: 
			return 'november'; 
        case 12: 
			return 'december';
    }
}

let year92 = new Map();
let year93 = new Map();
for (i=1; i<=12; i++){
    year92.set(month(i),0);
    year93.set(month(i),0);
}

for (i=1; i<=100; i++){
    let number = Math.floor(Math.random() * 100) % 24 + 1;
    if(number<=12){
        count = year92.get(month(number));
        year92.set(month(number), ++count);
    }else{
        count = year93.get(month(number));
        year93.set(month(number), ++count);
    }
}

for(i=1; i<=12; i++){
    total = year92.get(month(i))+year92.get(month(i));
    console.log(total+" members have birthdays in month "+month(i));
}