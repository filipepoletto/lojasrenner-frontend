import { GlobalStyle } from '../../styles/global';
import { Header } from './index';

export default {
  component: Header,
  title: 'Header',
};

export const Default = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  )
};
