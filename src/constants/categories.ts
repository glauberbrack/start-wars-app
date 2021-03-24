import { theme } from '~/theme';

const categories = [
  { name: 'Planetas', icon: 'planets', color: [`${theme.colors.yellow.n400}`], screen: 'Planets' },
  {
    name: 'Personagens',
    icon: 'people',
    color: [`${theme.colors.blue.secondary}`],
    screen: 'Characters'
  },
  { name: 'Naves', icon: 'starships', color: [`${theme.colors.red.default}`], screen: 'Starships' },
  { name: 'Filmes', icon: 'films', color: [`${theme.colors.blue.default}`], screen: 'Films' }
];

export default categories;
