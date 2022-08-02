const DEFAULT_MAX = 10;
export const truncate = (str: string, max: number = DEFAULT_MAX) => {
  const words = str.trim().split(' ');
  const ellipsis = words.length > max ? '...' : '';
  return words.slice(0, max).join(' ') + ellipsis;
};

export const upperCaseFirstLetter = (words: string) => {
  return words
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};
