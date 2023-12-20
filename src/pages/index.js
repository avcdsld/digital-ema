import { ThemeUIProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Create from 'sections/create';
import Emas from 'sections/emas';
import FAQ from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeUIProvider theme={theme}>
      <Layout>
        <SEO
          title="Digital Ema on Flow Blockchain"
          description="Digital Ema on Flow Blockchain"
        />
        <Banner />
        <Create />
        <Emas />
        <FAQ />
      </Layout>
    </ThemeUIProvider>
  );
}
