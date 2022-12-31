import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MyPage from 'components/mypage';

const Account = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="Digital Ema on Flow Blockchain"
                    description="Digital Ema on Flow Blockchain"
                />
                <MyPage />
            </Layout>
        </ThemeProvider>
    );
};

export default Account;
