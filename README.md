# I-need-a-logo-now
Node.js command-line application that takes in user input to generate a logo and save it as an SVG file

## User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Technologies Used

Node JavaScript NPM Inquirer Jest

## Screenshot of Running App

![Screenshot of the running app](./assets/Screenshot%202023-10-31%20013656.png)

## Video Demonstration

https://drive.google.com/file/d/1R7Z5ubf2zaO70VnxEjGgTi0c8XMsjm8k/view?usp=sharing