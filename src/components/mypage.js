/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from 'react';
import { Link as A } from 'theme-ui';
import { useRouter } from 'next/router';
import { RxExit } from "react-icons/rx";
import { jsx, Box, Container, Button, Heading, Text, Grid } from 'theme-ui';
import { useSession, signIn, signOut } from 'next-auth/react';
import { connectWallet, logout, viewEmas, subscribeUser, flowviewUrl } from 'libs/flow';
import { useLocale } from 'hooks/useLocale';

const MyPage = () => {
  const { t, locale } = useLocale();
  const router = useRouter();
  const pathname = router.query.address;
  const { data: session } = useSession();

  const [account, setAccount] = useState(null);
  const [address, setAddress] = useState(null);
  const [emaSvgs, setEmaSvgs] = useState([]);

  const view = async () => {
    await connectWallet(setAccount);
  };

  useEffect(() => {
    console.log({ pathname })
    if (pathname === 'account') {
      subscribeUser(setAccount);
    } else {
      setAddress(String(pathname).replace('/', ''));
    }
  }, [router]);

  useEffect(() => {
    if (address && String(address).startsWith('0x')) {
      viewEmas(address).then(emas => {
        const rawSvgs = Object.entries(emas)
          .sort((a, b) => b[0] - a[0])
          .map(ema => ema[1]);
        if (rawSvgs && rawSvgs.length > 0) {
          const svgs = rawSvgs.map(rawSvg => {
            const buff = Buffer.from(rawSvg);
            return buff.toString('base64');
          });
          setEmaSvgs(svgs);
        }
      });
    }
  }, [address]);

  useEffect(() => {
    if (account && account.addr) {
      setAddress(account.addr);
      viewEmas(account.addr).then(rawSvgs => {
        if (rawSvgs && rawSvgs.length > 0) {
          const svgs = rawSvgs.map(rawSvg => {
            const buff = Buffer.from(rawSvg);
            return buff.toString('base64');
          });
          setEmaSvgs(svgs);
        }
      });
    } else {
      setAddress(null);
    }
  }, [account]);

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.heading}>
            <Heading sx={styles.title}>{router.query.address === 'account' ? t.MY_EMA : t.DIGITAL_EMA}</Heading>
            {!address ? (
              <Text as="p" sx={styles.description}>{t.YOU_CAN_CHECK_YOUR_EMA}</Text>
            ) : (
              <Text as="p" sx={styles.description}>
                {t.ACCOUNT + ': ' + address + ' '}
                {router.query.address === 'account' && <A onClick={() => { setEmaSvgs([]); setAddress(null); logout(); }}><RxExit style={{ cursor: 'pointer' }} /></A>}
              </Text>
            )}
          </Box>
          <Box as="figure" sx={styles.illustration}>
            {/* Google認証ユーザー向けメッセージ */}
            {session && !address && (
              <Box sx={styles.googleAuthMessage}>
                <Text as="p" sx={styles.googleAuthText}>
                  {locale === 'ja'
                    ? `${session.user.name} さん、Googleアカウントで作成した絵馬は管理者アカウントが保管しています。「みんなのデジタル絵馬」から確認できます。`
                    : `${session.user.name}, emas created with your Google account are stored in the admin account. You can find them in "Everyone's Digital Ema".`
                  }
                </Text>
                <Box sx={styles.googleAuthButtons}>
                  <Button as="a" href={locale === 'ja' ? '/ja#emas' : '/#emas'}>
                    {locale === 'ja' ? 'みんなのデジタル絵馬を見る' : "View Everyone's Ema"}
                  </Button>
                  <Button variant="text" onClick={() => signOut()} sx={{ ml: 2 }}>
                    {locale === 'ja' ? 'ログアウト' : 'Sign out'}
                  </Button>
                </Box>
              </Box>
            )}
            {/* ログイン・接続選択 */}
            {!session && !address && (
              <Box sx={styles.authOptions}>
                <Box
                  sx={styles.authOption}
                  onClick={() => signIn('google')}
                >
                  <Text sx={styles.authOptionTitle}>
                    {locale === 'ja' ? 'Googleでログイン' : 'Sign in with Google'}
                  </Text>
                  <Text sx={styles.authOptionDesc}>
                    {locale === 'ja' ? 'Googleアカウントで作成した絵馬を確認' : 'View emas created with Google'}
                  </Text>
                </Box>
                <Box
                  sx={styles.authOption}
                  onClick={view}
                >
                  <Text sx={styles.authOptionTitle}>
                    {locale === 'ja' ? 'ウォレットを接続' : 'Connect Wallet'}
                  </Text>
                  <Text sx={styles.authOptionDesc}>
                    {locale === 'ja' ? 'ウォレットで作成した絵馬を確認' : 'View emas created with wallet'}
                  </Text>
                </Box>
              </Box>
            )}
            {emaSvgs.length > 0 && (
              <Grid gap={2} columns={[1]}>
                {emaSvgs.map((emaSvg, i) => (
                  <Box sx={styles.emasWrapper} key={i}>
                    <img key={i} src={`data:image/svg+xml;base64,${emaSvg}`} />
                  </Box>
                ))}
              </Grid>
            )}
            {address && emaSvgs.length === 0 &&
              <Text as="p" sx={styles.description}>{t.EMA_NOT_YET_MADE}</Text>
            }
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MyPage;

const styles = {
  section: {
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  heading: {
    textAlign: 'center',
    maxWidth: 660,
    margin: ['0 auto 20px'],
  },
  title: {
    fontFamily: 'heading',
    fontWeight: 700,
    fontSize: [5, null, null, 26, null, 30, 9],
    lineHeight: [1.33, 1.33, 1.48],
    letterSpacing: ['-0.5px', null, null, null, null, null, '-1px'],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
    },
  },
  description: {
    color: 'heading',
    fontSize: [1, null, null, 2],
    lineHeight: [1.58, 1.58, 1.58, 2.2],
    maxWidth: ['none', 'none', 'none', 'none', 490],
    margin: '15px auto 0',
  },
  illustration: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['block', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['8px auto 0', null, null, '16px auto 0'],
    },
    mb: [60],
  },
  emasWrapper: {
    textAlign: ['center'],
    mb: [20],
  },
  buttonWrapper: {
    textAlign: ['center'],
    mb: [200],
  },
  googleAuthMessage: {
    textAlign: 'center',
    maxWidth: 500,
    mx: 'auto',
    p: 4,
    mb: 4,
    bg: '#F5F0E6',
    borderRadius: '4px',
  },
  googleAuthText: {
    color: '#2D2926',
    fontSize: ['14px', null, null, '15px'],
    lineHeight: 1.8,
    mb: 3,
  },
  googleAuthButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 2,
  },
  authOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    maxWidth: 400,
    mx: 'auto',
    mb: 8,
  },
  authOption: {
    p: 4,
    border: '1px solid #D9D4CB',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'center',
    '&:hover': {
      borderColor: '#B33E3E',
      bg: 'rgba(179, 62, 62, 0.05)',
    },
  },
  authOptionTitle: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#2D2926',
    display: 'block',
    mb: 1,
  },
  authOptionDesc: {
    fontSize: '13px',
    color: '#5C5552',
    display: 'block',
  },
};
