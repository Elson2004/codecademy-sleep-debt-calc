//How many hours of sleep each night. Numbers in hours
const getSleepHours = (day) => {
    switch (day) {
        case 'Monday':
            return 8;
            break;
        case 'Tuesday':
            return 6;
            break;
        case 'Wednesday':
            return 5;
            break;
        case 'Thursday':
            return 5;
            break;
        case 'Friday':
            return 5;
            break;
        case 'Saturday':
            return 7;
            break;
        case 'Sunday':
            return 6;
            break;
        default:
            console.log('Incorrect input');
            break;
    }
}
console.log(getSleepHours('Monday'));
console.log(getSleepHours('Sunday'));
console.log(getSleepHours('Saturday')); //testing out function

const getActualSleepHours = () => {
    let totalSleepHours = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
    return totalSleepHours;

}
console.log(getActualSleepHours()); //testing out function

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}
console.log(getIdealSleepHours()); //testing out function

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
}

if (actualSleepHours === idealSleepHours) {
    console.log('You got perfect amout of sleep.');
} else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than you needed.')
} else {
    console.log('You should get some rest.');
}