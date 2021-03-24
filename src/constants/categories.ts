import { theme } from '~/theme';

const categories = [
  { name: 'Planetas', icon: 'planets', color: [`${theme.colors.yellow.n400}`], url: 'Planets' },
  {
    name: 'Personagens',
    icon: 'people',
    color: [`${theme.colors.blue.secondary}`],
    url: 'Characters'
  },
  { name: 'Naves', icon: 'starships', color: [`${theme.colors.red.default}`], url: 'Starships' },
  { name: 'Filmes', icon: 'films', color: [`${theme.colors.blue.default}`], url: 'Films' }
];

export default categories;
