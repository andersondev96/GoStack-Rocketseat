import { render } from 'react-native-testing-library';
import "@testing-library/jest-dom/extend-expect";

import SignIn from '../../pages/SignIn';

describe('SignIn page', () => {
  it('should contains email/password inputs', () => {
    const { getByPlaceholder } = render(<SignIn />);

    expect(getByPlaceholder('E-mail')).toBeTruthy();
    expect(getByPlaceholder('Senha')).toBeTruthy();
  });
});
