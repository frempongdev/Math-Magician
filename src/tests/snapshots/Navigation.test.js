import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from '../../components/Navigation.js';// eslint-disable-line import/extensions

describe('Navigation', () => {
  test('should match with Navigation snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
