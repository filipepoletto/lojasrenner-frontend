import { GlobalStyle } from '../../styles/global';
import { CartTopbar } from './index';

export default {
  component: CartTopbar,
  title: 'CartTopbar',
};

export const Default = () => {
  return (
    <>
      <GlobalStyle />
      <CartTopbar />
    </>
  )
};
