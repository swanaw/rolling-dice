// simulate 2 dice rolling
const diceRollSimulator = () => {
  const rollTimes = 6;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  let six = 0;
  let seven = 0;
  let eight = 0;
  let nine = 0;
  let ten = 0;
  let eleven = 0;
  let twelve = 0;

  const arr = [
    { 2: two },
    { 3: three },
    { 4: four },
    { 5: five },
    { 6: six },
    { 7: seven },
    { 8: eight },
    { 9: nine },
    { 10: ten },
    { 11: eleven },
    { 12: twelve }
  ];

  for (let i = 1; i <= rollTimes; i++) {
    const rollOne = Math.floor((Math.random() * 6) + 1);
    const rollTwo = Math.floor((Math.random() * 6) + 1);
    const sum = rollOne + rollTwo;

    switch (sum) {
      case 2:
        two++;
        break;

      case 3:
        three++;
        break;

      case 4:
        four++;
        break;

      case 5:
        five++;
        break;

      case 6:
        six++;
        break;

      case 7:
        seven++;
        break;

      case 8:
        eight++;
        break;

      case 9:
        nine++;
        break;

      case 10:
        ten++;
        break;

      case 11:
        eleven++;
        break;

      case 12:
        twelve++;
        break;

      default:
        null;
    }

    console.log('In function =>', rollOne, rollTwo);
  }

  // console.log('In RETURN =>', arr);
  return arr;
};

// Invoke function
diceRollSimulator();
