import renderer from 'react-test-renderer';
import Home from '../../components/Home.js';// eslint-disable-line import/extensions

describe('Home', () => {
  test('should match with Home snapshot', () => {
    const tree = renderer.create(
      <Home />,
    );
    expect(tree).toMatchSnapshot();
  });
});
