export default function appendToEachArrayValue(array, appendString) {
  const marray = [];
  for (const item of array) {
    marray.push(appendString + item);
  }

  return marray;
}

