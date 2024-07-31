# 0x04-TypeScript

## Description:
TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

For example, JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

## Tasks

| File	 | Description |
| ------ | ----------- |
| [task_0/js/main.ts](task_0/js/main.ts) | <ul><li> Write an interface named `Student` that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`.</li><li>Create two students, and create an array named `studentsList` containing the two variables.</li><li>Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table.</li><li>Each row should contain the first name of the student and the location.</li><li> When running, Webpack should return `No type errors found`.</li><li>Every variable should use TypeScript when possible.</li></ul> |
| [task_1/js/main.ts](task_1/js/main.ts) | <ul><li>`firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized.</li><li>`fullTimeEmployee(boolean)` this attribute should always be defined.</li><li>`yearsOfExperience(number)` this attribute is optional.</li><li>`location(string)` this attribute should always be defined.</li><li>Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute.</li></ul> |
| [task_1/js/main.ts](task_1/js/main.ts) | <ul><li> Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`.</li></ul> |
| [task_1/js/main.ts](task_1/js/main.ts) | <ul><li> Write a function `printTeacher`:</li><li> - It accepts two arguments `firstName` and `lastName`.</li><li> - It returns the first letter of the `firstName` and the full `lastName`.</li><li> - Example: `printTeacher("John", "Doe") -> J. Doe`.</li><li> Write an interface for the function named `printTeacherFunction`.</li></ul> |
| [task_1/js/main.ts](task_1/js/main.ts) | <ul><li> Write a Class named `StudentClass`:</li><li> - The constructor accepts `firstName(string)` and `lastName(string)` arguments.</li><li> - The class has a method named `workOnHomework` that return the string `Currently working`.</li><li> - The class has a method named `displayName`. It returns the firstName of the student.</li><li> - The constructor of the class should be described through an Interface.</li><li> - The class should be described through an Interface.</li><li> - When running `npm run build`, no TypeScript error should be displayed.</li><li> Every variable should use TypeScript when possible.</li><ul> |
