import { theme } from '~/theme';

const categories = [
  { name: 'Planetas', icon: 'planets', color: [`${theme.colors.yellow.n400}`] },
  { name: 'Personagens', icon: 'people', color: [`${theme.colors.blue.secondary}`] },
  { name: 'Naves', icon: 'starships', color: [`${theme.colors.red.default}`] },
  { name: 'Filmes', icon: 'films', color: [`${theme.colors.blue.default}`] }
];

export default categories;
