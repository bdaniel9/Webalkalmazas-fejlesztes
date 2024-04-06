export const oddsAndEvens = (num: number): 'odd' | 'even' => {
  return num % 2 == 0 ? 'even' : 'odd';
};

console.log(oddsAndEvens(11));
