export interface Item {
  id: number;
  name: string;
}

export const uniqueFilter = (array: Item[]): Item[] => {
  const uniqueMap: Map<number, Item> = new Map();

  array.forEach(item => {
    if (!uniqueMap.has(item.id)) {
      uniqueMap.set(item.id, item);
    }
  });
  return Array.from(uniqueMap.values());
};

(()=>{
  const array:Item[]=[
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 4, name: 'c' },
    { id: 5, name: 'd' },
    { id: 4, name: 'e' },
    { id: 2, name: 'f' },
    { id: 6, name: 'g' },
  ];
  const response = uniqueFilter(array);
  console.log(response);
})();
