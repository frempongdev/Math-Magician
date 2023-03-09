import renderer from 'react-test-renderer';
import Quote from '../../components/Quote.js';// eslint-disable-line import/extensions

describe('Quote', () => {
  test('should match with Quote snapshot', () => {
    const tree = renderer.create(
      <Quote />,
    );
    expect(tree).toMatchSnapshot();
  });
});
