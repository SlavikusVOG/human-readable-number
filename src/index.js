module.exports = function toReadable (number) {
    // Number.length(number);
    if (number === 0) return "zero";
    let result = [];
    const numberArray = number.toString().split("").reverse();
    console.log(numberArray);
    const numberLength = numberArray.length;
    for(let i = numberLength; numberArray.length > 0; i--) {
        let numberToCheck = numberArray.splice(i-1);
        switch(Number.parseInt(numberToCheck[0])) {
            case 1:
                if(i === 2) {
                    let numberToCheck = numberArray.splice(i-2);
                    switch(Number.parseInt(numberToCheck[0])) {
                        case 1:
                            result.push("eleven");
                            break;
                        case 2:
                            result.push("twelve");
                            break;
                        case 3:
                            result.push("thirteen");
                            break;
                        case 4:
                            result.push("fourteen");
                            break;
                        case 5:
                            result.push("fifteen");
                            break;
                        case 6:
                            result.push("sixteen");
                            break;
                        case 7:
                            result.push("seventeen");
                            break;
                        case 8:
                            result.push("eighteen");
                            break;
                        case 9:
                            result.push("nineteen");
                            break;
                        case 0:
                            result.push("ten");
                            break;
                    }
                }
                if (i === 1) result.push("one");
                if (i === 3) result.push("one hundred");
                break;
            case 2:
                if(i === 1) result.push("two");
                if(i === 2) result.push("twenty");
                if(i === 3) result.push("two hundred");
                break;
            case 3:
                if(i === 1) result.push("three");
                if(i === 2) result.push("thirty");
                if(i === 3) result.push("three hundred");
                break;
            case 4:
                if(i === 1) result.push("four");
                if(i === 2) result.push("forty");
                if(i === 3) result.push("four hundred");
                break;
            case 5:
                if(i === 1) result.push("five");
                if(i === 2) result.push("fifty");
                if(i === 3) result.push("five hundred");
                break;
            case 6:
                if(i === 1) result.push("six");
                if(i === 2) result.push("sixty");
                if(i === 3) result.push("six hundred");
                break;
            case 7:
                if(i === 1) result.push("seven");
                if(i === 2) result.push("seventy");
                if(i === 3) result.push("seven hundred");
                break;
            case 8:
                if(i === 1) result.push("eight");
                if(i === 2) result.push("eighty");
                if(i === 3) result.push("eight hundred");
                break;
            case 9:
                if(i === 1) result.push("nine");
                if(i === 2) result.push("ninety");
                if(i === 3) result.push("nine hundred");
                break;
            case 0:
                break;
        }
    }
    return result.join(" ");
}
