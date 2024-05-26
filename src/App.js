import Layout from './pages/Layout';
import Home from './pages/Home';
import { ResetCss } from './styles/globals';

export default function App() {
  return (
    <Layout>
      <ResetCss />
      <Home />
    </Layout>
  );
};
 