export default class HolbertonCourse {
  contructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (!Number.isInteger(length)) throw new TypeError('length must be a number');
    if (!Array.isArray(students)) throw new TypeError('students type must be an Array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  /* Gets name of this course */
  get name() {
    return this._name;
  }

  /* Sets name of this course */
  set name(value) {
    if (typeof value !== 'string') throw new TypeError('name must be a string');
    this._name = value;
  }

  /* Gets length of this course */
  get length() {
    return this._length;
  }

  /* Set length of this course */
  set length(value) {
    if (!Number.isInteger(value)) throw new TypeError('length must be a number');
    this._length = value;
  }

  /* Gets students of this course */
  get students() {
    return this._students;
  }
	
  /* Sets student of this course */
  set students(value) {
    if (!Array.isArray(value)) throw new TypeError('students type must be an Array');
    this._students = value;
  }
}
