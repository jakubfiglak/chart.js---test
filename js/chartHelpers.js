export function generateLabel(coeffs) {
  const coeffsX = coeffs.map((coeff, idx) => {
    if (coeffs.length - idx - 1 === 0) {
      return `${coeff}`;
    }
    if (coeffs.length - idx - 1 === 1) {
      return `${coeff}x`;
    }
    return `${coeff}*x^${coeffs.length - idx - 1}`;
  });
  return `f(x) = ${coeffsX.join(' + ')}`;
}

export function generateArguments(min, max) {
  return Array.from({ length: max - min + 1 }, (v, k) => k + min);
}
