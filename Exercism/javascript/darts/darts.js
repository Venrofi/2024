const rings = [
  { radius: 1, score: 10 },
  { radius: 5, score: 5 },
  { radius: 10, score: 1 },
].sort((a, b) => a.radius - b.radius);

export const score = (x = 0, y = 0) => {
  const distanceSquared = x**2 + y**2;
  const targetRing = rings.find(ring => distanceSquared <= ring.radius**2);

  return targetRing ? targetRing.score : 0;
};