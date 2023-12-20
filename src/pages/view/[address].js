import { ThemeUIProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MyPage from 'components/mypage';

const Account = () => {
    return (
        <ThemeUIProvider theme={theme}>
            <Layout>
                <SEO
                    title="Digital Ema on Flow Blockchain"
                    description="Digital Ema on Flow Blockchain"
                />
                <MyPage />
            </Layout>
        </ThemeUIProvider>
    );
};

export default Account;
