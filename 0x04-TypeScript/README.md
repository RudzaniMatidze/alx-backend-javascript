# 0x04-TypeScript

## Description:
TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

For example, JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

## Tasks

| File	 | Description |
| ------ | ----------- |
| [task_0/js/main.ts](task_0/js/main.ts) |   + Write an interface named `Student` that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`.
  + Create two students, and create an array named `studentsList` containing the two variables.
  + Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table.
  + Each row should contain the first name of the student and the location.
  + When running, Webpack should return `No type errors found`.
  + Every variable should use TypeScript when possible. |
| [task_1/js/main.ts](task_1/js/main.ts) |  + `firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized.
  + `fullTimeEmployee(boolean)` this attribute should always be defined.
  + `yearsOfExperience(number)` this attribute is optional.
  + `location(string)` this attribute should always be defined.
  + Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute. |
