import { GlobalStyle } from '../../styles/global';
import { PageProduct } from './index';

export default {
  component: PageProduct,
  title: 'PageProduct',
};

export const Default = () => {
  return (
    <>
      <GlobalStyle />
      <PageProduct />
    </>
  )
};
