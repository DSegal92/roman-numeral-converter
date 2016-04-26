const ROMANS = { 1000: 'M',
                  900: 'CM',
                  500: 'D',
                  400: 'CD',
                  100: 'C',
                   90: 'XC',
                   50: 'L',
                   40: 'XL',
                   10: 'X',
                    9: 'IX',
                    5: 'V',
                    4: 'IV',
                    1: 'I' }

export function romanize(arabic, roman = '') {
  if (arabic === 0) { return roman; }
  return romanize(arabic - largest_available(arabic), roman += ROMANS[largest_available(arabic)])
}

function largest_available(arabic) {
  for (var x of Object.keys(ROMANS).reverse()) {
    if (x <= arabic) { return x; }
  }
}
