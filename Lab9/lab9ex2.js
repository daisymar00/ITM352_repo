function isNonNegInt(q) {
    let errors = []; // Assume no errors at first
  
    if (Number(q) !== q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) !== q) errors.push('Not an integer!'); // Check that it is an integer
  
    return errors.length === 0; // Return true if the array is empty, indicating no errors
  }

  for (let i = 0; i < pieces.length; i++) {
    console.log(`Piece ${i}: ${pieces[i]}, isNonNegInt: ${isNonNegInt(pieces[i])}`);
  }
  