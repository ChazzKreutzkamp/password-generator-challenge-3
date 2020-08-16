# Password Generator
## Project Summary
```
This project's purpose was to create a password based on a users input.
Said inputs are whether the user wants the password to include lowercase
letters, uppercase letters, numbers, symbols, and how long a password they
desire as long as it is between 8-128 characters.
```
## How this was accomplished
```
To obtain user data five prompts were utilized:

  four prompts were used to store character information as boolean data.
  one prompt was used to store the length of the password as an integer.
  
Error handling was handeled in two while loops:
  
  The first four prompts were stored in one while loop to confirm
  at least one option was selected.
  
  The last prompt was in its own while loop to insure the user entered
  an integer value and whether or not they entered a value between 8-128.

To generate the password:

  A for loop was made to iterate the based on the user inputted password length.
  
  A function was created to accept the boolean data as a method to create an if
  and else if statements that ensured that the random number generation wouldn't
  output unwanted characters based on user inputs.
  
  Within this function a random number generator was the method to randomly choose
  characters based on ASCII indexs that would be converted and returned as characters.
  
  The returned characters were added to the password string which became the return value
  for the generatePassword() function, which this returned value was then utilized by the
  base code.
