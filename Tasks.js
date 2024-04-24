
function filterHighScores(testScores) {
    return testScores.filter(score => score >= 70)
}
function addScore(score) {
    if (score < 96){
        return score + 5;
    }
    return score;
}
function addPointsToScore(scores, pointsToAdd) {
    return scores.map(score => addScore(score))
}

function square(numbers) {
    return numbers.map(num => num * num)
}


function distributeBooks(members, book) {
    for (const member of members) {
        member.book = book
    }
    return members
}

function filterAfternoonTime(time) {
    if (time === "12:00 PM" || time === "1:00 PM" || time === "2:00 PM" || time === "3:00 PM" || time === "4:00 PM" || time === "5:00 PM"){
        return time
    }
}

function scheduleAfternoonClasses(classTimings) {
    return classTimings.filter(time => filterAfternoonTime(time) )
}

function calculateExpenses(expenses) {
    let result = 0;
    for (const category in expenses) {
        result += expenses[category];
    }
    return result;
    
}
function removeUnhealthyFood(food) {
    if (food.isHealthy === true){
        return food
    }
}
function getHealthyFood(shoppingList){
    return shoppingList.filter(item => removeUnhealthyFood(item))
}



module.exports = {filterHighScores, addPointsToScore, square, distributeBooks, scheduleAfternoonClasses, calculateExpenses, getHealthyFood}