let {filterHighScores, addPointsToScore, square, distributeBooks, scheduleAfternoonClasses, calculateExpenses, getHealthyFood} = require("./Tasks")


test("filter high scores",() => {
    let testScores = [40,90,74,20,19,80,27,88,50,43];
    let result = [90,74,80,88]
    let answer = filterHighScores(testScores)
    expect(answer).toEqual(result)
})

test("Add 5 to scores",() => {
    let testScores = [85, 92, 78, 88, 95];
    let result = [90,97,83,93,100]
    let answer = addPointsToScore(testScores)
    expect(answer).toEqual(result)
})

test("square of numbers",() => {
    let testScores = [2,3,4,6,8,10];
    let result = [4,9,16,36,64,100]
    let answer = square(testScores)
    expect(answer).toEqual(result)
})

test("distribute books ",() => {
    let book = {name: "Java For Beginners"}
    let members = [{name: "Emily", book: null},{name: "Jack", book: null} ,{name: "Sophia", book: null} ,{name: "Daniel", book: null}];
    let result = [{name: "Emily", book: book},{name: "Jack", book: book} ,{name: "Sophia", book: book} ,{name: "Daniel", book: book}];
    let answer = distributeBooks(members,book)
    expect(answer).toEqual(result)
})

test("Schedule afternoon classes",() => {
    let classTimings = ["9:00 AM","11:00 AM","12:00 PM","1:00 PM","3:00 PM","5:00 PM"];
    let result = ["12:00 PM","1:00 PM","3:00 PM","5:00 PM"]
    let answer = scheduleAfternoonClasses(classTimings)
    expect(answer).toEqual(result)
})

test("Calculate expenses ",() => {
    let expenses = {"groceries" : 150, "dining out" : 100, "transportation" : 50, "entertainment" :80}
    let result =  380
    let answer = calculateExpenses(expenses)
    expect(answer).toEqual(result)
})

test("Filter unhealthy items from list",() => {
    let shoppingList = [{name: 'Apples', category: 'Fruits',isHealthy: true},
        {name: 'Potato Chips', category: 'Snacks',isHealthy: false},
        {name: 'Carrots', category: 'Vegetables',isHealthy: true},
        {name: 'Chocolate Bars', category: 'Sweets',isHealthy: false},
        {name: 'Greek yoghurts', category: 'Dairy',isHealthy: false},
        {name: 'Soda', category: 'Beverage',isHealthy: false}
    ]
    let result =  [{name: 'Apples', category: 'Fruits',isHealthy: true},{name: 'Carrots', category: 'Vegetables',isHealthy: true}]
    let answer = getHealthyFood(shoppingList)
    expect(answer).toEqual(result)
})