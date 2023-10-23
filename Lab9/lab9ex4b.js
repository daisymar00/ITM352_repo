function isNonNegInt(q, returnErrors = false) {
  let errors = []; // Assume no errors at first

  if (Number(q) !== q) errors.push('Not a number!'); // Check if string is a number value
  if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
  if (parseInt(q) !== q) errors.push('Not an integer!'); // Check that it is an integer

  return returnErrors ? errors : errors.length === 0;
}


for (let i = 0; i < pieces.length; i++) {
  const result = isNonNegInt(pieces[i], true);
  console.log(`Piece ${i}: ${pieces[i]}, isNonNegInt: ${result}`);
}
