

// Break the program down into simple, individual behaviors with input/output examples. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file.


# Ping Pong array game

#### Third Epicodus code review project, a game converting numbers to words.

#### By Omid Ashtari

## Description

A game where a number is input, and resulting page needs to replace numbers divisible by 3-> "ping", numbers divisible by 5 -> "pong" and divisible by 15 -> "pingpong", while all other numbers are shows as is (e.g. 1 remains a 1, 2 remains a 2, but 3 becomes 'pong'. Program capitalizes on HTML, CSS, Bootstrap, JavaScript and jQuery.

## Setup/Installation Requirements

* Clone this repository.
* Open the HTML, CSS, jQuery and JavaScript docs in your favorite code editor, I prefer Atom and Sublime Text.
* Also open the HTML file in your favorite browser, I prefer Chrome by Google.
* Edit as you wish for your own use.

## Program specifications

Program will recognize non-number entries and alert for a fix.
Input: “a”
Output: alert "please enter a number"

Program will convert number entered as a string into an integer.
Input: "1"
Output: 1

Program will recognize entry number > 250 and alert for a number <=250.
Input: “346”
Output: alert "please enter a smaller number"

Program will recognize entry number <= 250 and create a list of numbers from 1 up to entry number.
Input: "5"
Output: 1,2,3,4,5

Program will recognize numbers divided by 3 and replace them with the word 'ping'.
Input: "5"
Output: 1,2,ping,4,5

Program will recognize numbers divided by 5 and replace them with the word 'pong'.
Input: "5"
Output: 1,2,ping,4,pong

Program will recognize numbers divided by 15 and replace them with the word 'pingpong'.
Input: "15"
Output: 1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong

Program will empty the results div so each submission leads to a new list of numbers of letters.
Input: new number
Output: new list of numbers and words

## Known Bugs

None to my knowledge currently.

## Support and contact details

If you have any questions, do not hesitate to reach me on Twitter: https://www.twitter.com/omid

## Technologies Used

HTML
CSS
Bootstrap
JavaScript
jQuery
gh-pages link (https://oashtari.github.io/pingpong)

### License

Copyright (c) 2015 Omid Ashtari, Epicodus Evening Course :)
