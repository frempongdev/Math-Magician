import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App.js'; // eslint-disable-line import/extensions

test('Should match App snapshot', () => {
  const tree = renderer.create(

    <BrowserRouter>
      <App />
    </BrowserRouter>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
