/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import { useLocale } from 'hooks/useLocale';

const FAQ = () => {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      id: 1,
      question: t.FAQ1_Q,
      answer: t.FAQ1_A,
    },
    {
      id: 2,
      question: t.FAQ2_Q,
      answer: t.FAQ2_A,
    },
    {
      id: 3,
      question: t.FAQ3_Q,
      answer: t.FAQ3_A,
    },
  ];

  return (
    <Box as="section" id="faq" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.sectionHeader}>
          <Text as="span" sx={styles.labelText}>FAQ</Text>
          <Heading as="h2" sx={styles.sectionTitle}>
            {t.FAQ_TITLE}
          </Heading>
          <Box sx={styles.titleDecoration} />
        </Box>

        <Box sx={styles.faqList}>
          {data.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                ...styles.faqItem,
                ...(activeIndex === index ? styles.faqItemActive : {}),
              }}
              onClick={() => setActiveIndex(index)}
            >
              <Box sx={styles.faqHeader}>
                <Text as="span" sx={styles.faqNumber}>
                  {String(index + 1).padStart(2, '0')}
                </Text>
                <Heading as="h4" sx={styles.faqQuestion}>
                  {item.question}
                </Heading>
                <Box sx={{
                  ...styles.faqIcon,
                  transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>
                  +
                </Box>
              </Box>
              <Box sx={{
                ...styles.faqAnswer,
                maxHeight: activeIndex === index ? '500px' : '0',
                opacity: activeIndex === index ? 1 : 0,
                pt: activeIndex === index ? 4 : 0,
              }}>
                <Text as="p">{item.answer}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  section: {
    backgroundColor: '#FFFEF9',
    pt: [14, null, null, 18],
    pb: [14, null, null, 18],
    position: 'relative',
  },
  container: {
    maxWidth: '800px',
  },
  sectionHeader: {
    textAlign: 'center',
    mb: [10, null, null, 12],
  },
  labelText: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.2em',
    color: '#B33E3E',
    mb: 3,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontFamily: 'heading',
    fontSize: [6, null, null, 8],
    fontWeight: 500,
    color: '#1A1311',
    letterSpacing: '0.08em',
    mb: 4,
  },
  titleDecoration: {
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, #B33E3E 0%, #C4A747 100%)',
    mx: 'auto',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  faqItem: {
    backgroundColor: '#FFFEF9',
    border: '1px solid #E8E4DC',
    padding: [4, null, null, 5],
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: '#C4A747',
    },
  },
  faqItemActive: {
    borderColor: '#B33E3E',
    borderLeft: '3px solid #B33E3E',
    backgroundColor: '#FDFCF8',
  },
  faqHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: [3, null, null, 4],
  },
  faqNumber: {
    fontFamily: 'heading',
    fontSize: ['14px', null, null, '16px'],
    fontWeight: 500,
    color: '#C4A747',
    minWidth: '32px',
  },
  faqQuestion: {
    fontFamily: 'body',
    fontSize: [1, null, null, 2],
    fontWeight: 500,
    color: '#2D2926',
    flex: 1,
    lineHeight: 1.6,
  },
  faqIcon: {
    fontSize: '24px',
    fontWeight: 300,
    color: '#B33E3E',
    transition: 'transform 0.3s ease',
    minWidth: '24px',
    textAlign: 'center',
  },
  faqAnswer: {
    overflow: 'hidden',
    transition: 'all 0.4s ease',
    pl: ['40px', null, null, '48px'],
    p: {
      fontSize: [1, null, null, 2],
      lineHeight: 2,
      color: '#5C5552',
    },
  },
};
