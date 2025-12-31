/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Image } from 'theme-ui';
import { Link } from 'components/link';
import { rgba } from 'polished';

const Widget = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as="h4">{title}</Heading>
      <ul>
        {items.map(({ path, label, icon }, i) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            {String(path).startsWith("https") ?
              <a href={path} target="_blank" key={i}>{label}</a> :
              <Link path={path} key={i} label={label} variant="footer" />
            }
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Widget;

const styles = {
  footerWidget: {
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          width: '20px',
          height: '20px',
          mr: '10px',
        },
      },
      a: {
        color: rgba('#02073E', 0.8),
        fontSize: '14px',
        lineHeight: '2.5em',
        textDecoration: 'none',
        cursor: 'pointer',
      },
    },
  },
};
