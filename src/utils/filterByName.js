export const filterItems = (items, searchValue) => {
  const value = searchValue.toLowerCase();
  return items.filter(({ nameOriginal, nameRu, nameEn }) => {
    return (
      (nameOriginal && nameOriginal.toLowerCase().includes(value)) ||
      (nameRu && nameRu.toLowerCase().includes(value)) ||
      (nameEn && nameEn.toLowerCase().includes(value))
    );
  });
};
