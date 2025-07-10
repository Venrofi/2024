// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const shipNumber = Math.floor(Math.random() * 9999 + 1000);

  return "NCC-" + shipNumber;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const stardate = Math.random() * 999 + 41000;

  return Number(stardate.toFixed(1));
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const availablePlanets = 'DHJKLMNRTY';
  const randomIndex = Math.floor(Math.random() * availablePlanets.length);

  return availablePlanets[randomIndex];
}
