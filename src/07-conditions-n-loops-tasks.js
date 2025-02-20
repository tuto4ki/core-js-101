/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  function factorialR(num, current, multi) {
    if (num === current) {
      return multi;
    }
    return factorialR(num, current + 1, multi * (current + 1));
  }
  return factorialR(n, 1, 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  let i = n1;
  while (i <= n2) {
    sum += i;
    i += 1;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const max = Math.max(a, b, c);
  const sum = a + b + c - max;
  if (sum > max) {
    return true;
  }
  return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  if (rect1.top <= rect2.top && rect2.top <= rect1.top + rect1.width) {
    if (rect1.left <= rect2.left && rect2.left <= rect1.left + rect1.height) {
      return true;
    }
  } else if (rect2.top <= rect1.top && rect1.top <= rect2.top + rect2.width) {
    if (rect2.left <= rect1.left && rect1.left <= rect2.left + rect2.height) {
      return true;
    }
  }
  return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const r = Math.sqrt((point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2);
  if (r < circle.radius) {
    return true;
  }
  return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const length = str.length - 1;
  for (let i = 0; i < str.length; i += 1) {
    if (str.replaceAll(str[i], '').length === length) {
      return str[i];
    }
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let str = '';
  const begin = Math.min(a, b);
  const end = Math.max(a, b);
  if (isStartIncluded) {
    str = `[${begin}`;
  } else {
    str = `(${begin}`;
  }
  if (isEndIncluded) {
    str += `, ${end}]`;
  } else {
    str += `, ${end})`;
  }
  return str;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +(num.toString().split('').reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const cardArr = ccn.toString().replace(/\D/g, '');
  let sum = 0;
  let flag = false;
  for (let i = cardArr.length - 1; i >= 0; i -= 1) {
    let num = parseInt(cardArr[i], 10);
    if (flag) {
      num *= 2;
      if (num > 9) {
        num -= 9;
      }
    }
    sum += num;
    flag = !flag;
  }
  return (sum % 10 === 0);
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  function digitalR(num2) {
    if (+num2 < 10) {
      return num2;
    }
    let sum = +(num2.toString().split('').reduce((s, value) => +s + +value, 0));
    sum = digitalR(sum);
    return sum;
  }
  return digitalR(num);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  if (str.length === 0) {
    return true;
  }
  let str1 = str;
  if (str1.length % 2) {
    return false;
  }
  const strBegin = '[({<';
  const strEnd = '])}>';
  if (strBegin.indexOf(str1[0]) === -1 || strEnd.indexOf(str1[str1.length - 1]) === -1) {
    return false;
  }
  let index = 0;
  while (index < str1.length && index >= 0) {
    const indexBracked = strBegin.indexOf(str1[index]);
    const indexBrackEnd = strEnd.indexOf(str1[index]);
    if (indexBracked >= 0) {
      if (str1[index + 1] === strEnd[indexBracked]) {
        str1 = str1.substring(0, index) + str1.substring(index + 2, str1.length);
        index = index > 0 ? index - 1 : 0;
      } else {
        index += 1;
      }
    } else if (indexBrackEnd >= 0) {
      return false;
    }
  }
  if (str1.length > 0) {
    return false;
  }
  return true;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  const num2 = +num;
  const naryStringR = (numN, nN) => {
    if (numN < nN) {
      return String(numN);
    }
    const desc = numN % nN;
    return naryStringR(Math.trunc(numN / nN), nN) + desc;
  };
  return naryStringR(num2, n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const matrix = pathes.map((value) => value.split('/'));
  let isTemplate = true;
  const length = Math.min(...matrix.map(((value) => value.length)));
  let path = '';
  for (let i = 0; i < length; i += 1) {
    const template = matrix[0][i];
    for (let j = 0; j < matrix.length; j += 1) {
      isTemplate = isTemplate && (matrix[j][i] === template);
    }
    if (!isTemplate) {
      break;
    }
    path += `${template}/`;
  }
  return path;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const matrix = new Array(m1.length).fill(1);
  for (let i = 0; i < m1.length; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < m2[i].length; j += 1) {
      let multi = 0;
      for (let k = 0; k < m2.length; k += 1) {
        multi += m1[i][k] * m2[k][j];
      }
      matrix[i][j] = multi;
    }
  }
  return matrix;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const positionNew = (new Array(3)).fill(1);
  for (let i = 0; i < position.length; i += 1) {
    positionNew[i] = new Array(3).fill('');
    for (let j = 0; j < position[i].length; j += 1) {
      positionNew[i][j] = position[i][j];
    }
  }
  const checkWine = (matrix, symbol) => {
    let isWine = true;
    for (let i = 0; i < matrix.length; i += 1) {
      isWine = isWine && (matrix[i][i] === symbol);
    }
    if (isWine) {
      return true;
    }
    isWine = true;
    for (let i = matrix.length - 1; i >= 0; i -= 1) {
      isWine = isWine && (matrix[matrix.length - i - 1][i] === symbol);
    }
    if (isWine) {
      return true;
    }
    let isWineColl = true;
    for (let i = 0; i < matrix.length; i += 1) {
      isWine = true;
      isWineColl = true;
      for (let j = 0; j < matrix[i].length; j += 1) {
        isWine = isWine && (matrix[i][j] === symbol);
        isWineColl = isWineColl && (matrix[j][i] === symbol);
      }
      if (isWine || isWineColl) {
        return true;
      }
    }
    return false;
  };
  if (checkWine(positionNew, 'X')) {
    return 'X';
  }
  if (checkWine(positionNew, '0')) {
    return '0';
  }
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
