export default function calcPolynominal(argums, coeffs) {
  return argums.map(
    arg =>
      coeffs
        .map((coeff, idx) => coeff * arg ** (coeffs.length - idx - 1))
        .reduce((prev, curr) => prev + curr),
    0
  );
}
