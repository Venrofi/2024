export const degreesOfSeparation = (familyTree, personA, personB) => {
  const graph = buildGraph(familyTree);
  const queue = [[personA, 0]];
  const visited = new Set();

  if (personA === personB) return 0;
  if (!graph[personA] || !graph[personB]) return -1;

  while (queue.length > 0) {
    const [current, distance] = queue.shift();

    if (current === personB) {
      return distance;
    }

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
};

function buildGraph(familyTree) {
  const graph = {};

  for (const person in familyTree) {
    if (!graph[person]) {
      graph[person] = [];
    }

    const children = familyTree[person];

    for (const child of children) {
      graph[person].push(child);

      if (!graph[child]) {
        graph[child] = [];
      }

      graph[child].push(person);

      for (const sibling of children) {
        if (sibling !== child && !graph[child].includes(sibling)) {
          graph[child].push(sibling);
        }
      }
    }
  }

  return graph;
}
