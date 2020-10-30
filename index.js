// inputs: array -an array of card objects
// outputs: count -the weighted count of the card objects
// cards 2 - 6 are worth 1 pt
// cards 7 - 9 are worth 0 pt
// cards 10s, face cards, aces are worth -1

// function with parameter array
function cardCounter(array) {
// instantiate count variable at 0
    var count = 0;

// iterate over the input array beginning at *1*
//** should start at 0
// fixed
    for (var i = 0; i < array.length; i++) {
// alias variable for array element
        var card = array[i];
//** should iterate over card variable (for key in object)
      for (var key in card) {
// should be in terms of object's value at key

// if cards value is between 2 and 6
        if (card[key] >= 2 && card[key] <= 6) {
  // increment count by 1
            count++;
//** missing 7, 8, 9 card values

// if cards value is between 10 or is equal to 'face or ace'
// should be in terms of object's value at key
        } else if (card[key] >= 10 || card[key] === 'face or ace') {
// decrement count by 1
            count--;
        }
        return count;
    }
  }
}
//** failed case should state expected and actual values
function assertEquals(actual, expected, testDescription) {
    if (actual !== expected) {
        console.log('Test 1 failed: expected ' + expected + ' but got ' + actual, testDescription);
        return;
    }
    console.log('test passed');
    return;
}

//** failed case should state expected and actual values
function assertEquals2(actual2, expected2, testDescription) {
    if (actual !== expected) {
        console.log('Test 2 failed: expected ' + expected2 + ' but got ' + actual2, testDescription);
        return;
    }
    console.log('test passed');
    return;
}
// right
var dealtCards = [ { 'card 0': 2 }, { 'card 1': 6 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ];
// right
var actual = cardCounter(dealtCards);
// right
var expected = 1;
// right
assertEquals(actual, expected, 'function should return correct HiLo count.');
// right
var dealtCards2 = [ { 'card 0': 'face or ace' }, { 'card 1': 9 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ];
// right
var actual2 = cardCounter(dealtCards2);
// right
var expected2 = -2;
// right
assertEquals2(actual2, expected2, 'function should return correct HiLo count.');
