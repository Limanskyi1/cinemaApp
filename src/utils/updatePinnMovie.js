
export const updatePinned = (id,data) => {
  const pinned = JSON.parse(localStorage.getItem("pinned")) || [];
  
  const checkUnique = pinned.some(item => item.kinopoiskId === id);

  if(checkUnique) {
    const updatedPinned = pinned.filter(item => item.kinopoiskId !== id);
    localStorage.setItem("pinned", JSON.stringify(updatedPinned));
    return false
  }

  localStorage.setItem("pinned", JSON.stringify([...pinned, data]));
  return true
};
