/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx, Box, Container, Grid, Button, Spinner } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import { viewAllEmas } from 'libs/flow';
import { useLocale } from 'hooks/useLocale';

const Emas = () => {
  const { t } = useLocale();
  const [emaSvgs, setEmaSvgs] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [allFetched, setAllFetched] = useState(false);
  const [lastUpTo, setLastUpTo] = useState(0);

  useEffect(() => {
    const from = 0;
    const upTo = from + 8;
    viewAllEmas(from, upTo).then(rawSvgs => {
      if (rawSvgs && rawSvgs.length > 0) {
        setLastUpTo(upTo);
        const svgs = rawSvgs.map(rawSvg => {
          const buff = Buffer.from(rawSvg);
          return buff.toString('base64');
        });
        setEmaSvgs(svgs);
      }
    });
  }, []);

  const loadMore = async () => {
    try {
      setFetching(true);
      const from = lastUpTo;
      const upTo = from + 8;
      const rawSvgs = await viewAllEmas(from, upTo);
      setLastUpTo(upTo);
      const svgs = rawSvgs.map(rawSvg => {
        const buff = Buffer.from(rawSvg);
        return buff.toString('base64');
      });
      console.log(svgs);
      if (svgs.length > 0) {
        setEmaSvgs([...emaSvgs, ...svgs]);
      } else {
        setAllFetched(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setFetching(false);
    }
  }

  return (
    <Box as="section" id="emas" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title={t.EVERYONES_EMAS}
          description=""
        />
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.illustration}>
            {emaSvgs.length > 0 && (
              <Grid gap={2} columns={[2, null, null, 4]}>
                {emaSvgs.map((emaSvg, i) => (
                  <Box sx={styles.emasWrapper} key={i+1}>
                    <img key={i+1} src={`data:image/svg+xml;base64,${emaSvg}`} />
                  </Box>
                ))}
              </Grid>
            )}
          </Box>
          {!allFetched && !isFetching &&
            <Button variant={'text'} onClick={loadMore}>{t.SEE_MORE}</Button>
          }
          {isFetching && <Spinner size={32} ml={2} mr={2} />}

        </Box>
      </Container>
    </Box>
  );
};
export default Emas;

const styles = {
  section: {
    backgroundColor: '#FFFEF9',
    pt: [14, 14, 14, 18],
    pb: [14, 14, 14, 18],
    position: 'relative',
  },
  heading: {
    mb: [8, null, null, 10],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  illustration: {
    display: 'block',
    width: '100%',
    position: 'relative',
    mb: [8],
  },
  emasWrapper: {
    textAlign: 'center',
    p: [2, null, null, 3],
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
    img: {
      width: '100%',
      mixBlendMode: 'multiply',
    },
  },
};
