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
| [task_1/js/main.ts](task_1/js/main.ts) | <ul><li> Write a Class named `StudentClass`:</li><li> - The constructor accepts `firstName(string)` and `lastName(string)` arguments.</li><li> - The class has a method named `workOnHomework` that return the string `Currently working`.</li><li> - The class has a method named `displayName`. It returns the firstName of the student.</li><li> - The constructor of the class should be described through an Interface.</li><li> - The class should be described through an Interface.</li><li> - When running `npm run build`, no TypeScript error should be displayed.</li><li> Every variable should use TypeScript when possible.</li></ul> |
| [task_2/js/main.ts](task_2/js/main.ts) | <ul><li> Create the `DirectorInterface` interface with the 3 expected methods:</li><li> - `workFromHome()` returning a string.</li><li>`getCoffeeBreak()` returning a string.</li><li> - `workDirectorTasks()` returning a string.</li><li> Create the `TeacherInterface` interface with the 3 expected methods:</li><li> -`workFromHome()` returning a string.</li><li> - `getCoffeeBreak()` returning a string.</li><li> - `workTeacherTasks()` returning a string.</li><li> Create a class `Director` that will implement `DirectorInterface`:</li><li> - `workFromHome` should return the string `Working from home`.</li><li> -`getToWork` should return the string `Getting a coffee break`.</li><li> - `workDirectorTasks` should return the string `Getting to director tasks`.</li><li> Create a class `Teacher` that will implement `TeacherInterface`:</li><li> - `workFromHome` should return the string `Cannot work from home`.</li><li> - `getCoffeeBreak` should return the string `Cannot have a break`.</li><li> - `workTeacherTasks` should return the string `Getting to work`.</li><li> Create a function `createEmployee` with the following requirements:</li><li> -It can return either a `Director` or a `Teacher` instance.</li><li> - It accepts 1 arguments:</li><li> -- `salary`(either number or string).</li><li> - If `salary` is a number and less than 500 - It should return a new `Teacher`. Otherwise it should return a `Director`.</li></ul> |
| [task_2/js/main.ts](task_2/js/main.ts) | <ul><li> Write a function `isDirector`:</li><li> - It accepts `employee` as an argument.</li><li> - It will be used as a type predicate and if the employee is a director.</li><li> Write a function `executeWork`:</li><li> - It accepts `employee` as an argument.</li><li> - If the employee is a `Director`, it will call `workDirectorTasks`.</li><li> - If the employee is a `Teacher`, it will call `workTeacherTasks`.</li></ul> |
| [task_2/js/main.ts](task_2/js/main.ts) | <ul><li> Write a String literal type named `Subjects` that allows a variable to have the value `Math` or `History` only.</li><li> Write a function named `teachClass`:</li><li> - It takes `todayClass` as an argument.</li><li> - It will return the string `Teaching Math` if `todayClass` is `Math`.</li><li> - It will return the string `Teaching History` if `todayClass` is `History`.</li></ul> |
| [task_3/js/interfaces.ts](task_3/js/interfaces.ts) | <ul><li>  Export a type `RowID` and set it equal to `number`.</li><li> Export an interface `RowElement` that contains these 3 fields:</li><li> - `firstName`: `string`.</li><li> - `lastName`: `string`.</li><li> - `age?`: `number`.</li><li> You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can't write a connector to the database, and you decided to download a library called `crud.js`. Copy the file, which is shown below, into the [task_3/js](task_3/js) directory.</li></ul> |
   ```js
    export function insertRow(row) {
      console.log('Insert row', row);
      return Math.floor(Math.random() * Math.floor(1000));
    }

    export function deleteRow(rowId) {
      console.log('Delete row id', rowId);
      return;
    }

    export function updateRow(rowId, row) {
      console.log(`Update row ${rowId}`, row);

      return rowId;
    }
    ```
|   | <ul><li> [task_3/js/crud.d.ts](task_3/js/crud.d.ts) is an ambient file that meets the following requirements:</li><li> - Export the type declarations for each crud function.</li><li> - At the top of the file, import `RowID` and `RowElement` from [task_3/js/interfaces.ts](task_3/js/interfaces.ts).</li><li> [task_3/js/main.ts](task_3/js/main.ts) contains a script that meets the following requirements:</li><li> - At the top of the file create a [triple slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) that includes all the dependencies from [task_3/js/crud.d.ts](task_3/js/crud.d.ts).</li><li>  - Import the `RowID` type and `RowElement` from [task_3/js/interfaces.ts](task_3/js/interfaces.ts).</li><li> - Import everything from [task_3/js/crud.js](task_3/js/crud.js) as `CRUD`.</li><li> - Create an object called `row` with the type `RowElement` with the fields set to these values:</li><li> -- `firstName`: `Guillaume`.</li><li> -- `lastName`: `Salva`.</li><li> - Create a `const` variable named `newRowID` with the type `RowID` and assign it the value of the `insertRow` command.</li><li> - Next, create a `const` variable named `updatedRow` with the type `RowElement` and update `row` with an age field set to `23`.</li><li> - Finally, call the `updateRow` and `deleteRow` commands.</li></ul> |
