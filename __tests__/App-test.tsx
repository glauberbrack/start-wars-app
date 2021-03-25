import 'react-native';
import React from 'react';
import App from '../App';
import { CategoryCard } from '../src/components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CategoryCard icon='arrow-right' name='Glauber Brack' color='#151515' screen='Glauber' />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
