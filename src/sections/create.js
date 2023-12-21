/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx, Box, Textarea, Input, Button, Spinner, Container, Flex, Label, Radio, Text } from 'theme-ui';
import { rgba } from 'polished';
import useWindowSize from 'react-use/lib/useWindowSize';
import EmaSvg from 'components/preview/ema-svg';
import SectionHeading from 'components/section-heading';
import Modal from 'react-modal';
import Confetti from 'react-confetti';
import { connectWallet, mintEma, subscribeTx, explorerUrl } from 'libs/flow';
import { useLocale } from 'hooks/useLocale';

const Create = () => {
  const { locale, t } = useLocale();
  const { width, height } = useWindowSize();
  const [account, setAccount] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [txId, setTxId] = useState(null);
  const [isTxSealed, setTxSealed] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [templateName, setTemplateName] = useState('dappy');
  const [dappyEyeColor, setDappyEyeColor] = useState('#ff5a9d');
  const [dappyStripe1Color, setDappyStripe1Color] = useState('#ffe922');
  const [dappyStripe2Color, setDappyStripe2Color] = useState('#60c5e5');
  const [singleColor, setSingleColor] = useState('#000000');
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement('#__next');

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mint = async () => {
    try {
      setLoading(true);

      console.log({ message });
      if (!message || !name) {
        alert('Something Wrong.');
      } else {
        const messageFontSize = message.length <= 7 ? '2.8em' :
                                  message.length <= 20 ? '1.8em' :
                                    message.length <= 40 ? '1.5em' :
                                      message.length <= 60 ? '1.2em' : '1em';
        const params = templateName === 'dappy' ? {
          message,
          messageFontSize,
          name: getTodayDateStr() + ' ' + name,
          nameFontSize: '0.8em',
          eyeColor: dappyEyeColor,
          stripeColor1: dappyStripe1Color,
          stripeColor2: dappyStripe2Color,
        } : {
          message,
          messageFontSize,
          name: getTodayDateStr() + ' ' + name,
          nameFontSize: '0.8em',
          color: singleColor,
        };
        const tx = await mintEma({ templateName, params });
        setTxSealed(false);
        setTxId(tx.transactionId);
        subscribeTx(tx, setTxSealed);
      }

      setLoading(false);
    } catch (e) {
      console.log(e);
      alert(JSON.stringify(e, Object.getOwnPropertyNames(e)));
      setLoading(false);
    }
  }

  const openModal = async () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const getTodayDateStr = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = ('00' + (now.getMonth() + 1)).slice(-2);
    const d = ('00' + now.getDate()).slice(-2);
    return (y + '/' + m + '/' + d);
  }

  const dappyColors = [
    ['#FF5A9D', '#FFE922', '#60C5E5'],
    ['#94DFF6', '#F6ABBA', '#94DFF6'],
    ['#74ee15', '#cae36f', '#6b6b49'],
    ['#D61774', '#9D5098', '#1F429C'],
    ['#F8EF38', '#8D5FA8', '#211F20'],
    ['#A3A5A4', '#8D5FA8', '#211F20'],
    ['#A3A5A4', '#BCDA84', '#211F20'],
    ['#001DED', '#E84B56', '#211F20'],
    ['#D50E8D', '#5BBD70', '#068DCF'],
  ];
  const singleColors = [
    '#000000', // 黒色
    '#91b493', // まっ茶色	
    '#8b81c3', // 藤色
    '#fed4ea', // 桜色
    '#00a3af', // 浅葱色
  ];

  const updateSvg = (_message, _name) => {
    setMessage(_message);
    setName(_name);
    const [eyeColor, stripeColor1, stripeColor2] = dappyColors[(_message + _name).length % dappyColors.length];
    setDappyEyeColor(eyeColor);
    setDappyStripe1Color(stripeColor1);
    setDappyStripe2Color(stripeColor2);
    const singleColor = singleColors[(_message + _name).length % singleColors.length];
    setSingleColor(singleColor);
  }

  const handleRadioChange = (e) => {
    setTemplateName(e.target.value);
  };

  useEffect(() => {
    if (isTxSealed) {
      returnTop();
    }
  }, [isTxSealed]);

  return (
    <Box as="section" id="create" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title={t.WRITE_WISHES_FOR_NEW_YEAR}
          description={t.WRITE_WISHES_DESCRIPTION}
        />

        <Box sx={styles.contentWrapper}>
          <p>{t.WISHES_EXAMPLES}</p>
          <Textarea placeholder={t.YOUR_WISH} rows={4} backgroundColor={'white'} onChange={(event) => { updateSvg(event.target.value, name); }}></Textarea>
          <Input placeholder={t.YOUR_NAME} backgroundColor={'white'} onChange={(event) => { updateSvg(message, event.target.value); }} />

          <Flex mt={2} mb={3} style={{width: '90%'}}>
            <Label mr={2}>
              <Radio name="templateName" value="dappy" onChange={handleRadioChange} defaultChecked={true} />Dappy
            </Label>
            <Label mr={2}>
              <Radio name="templateName" value="dragon" onChange={handleRadioChange} />辰
            </Label>
            <Label mr={2}>
              <Radio name="templateName" value="fuji" onChange={handleRadioChange} />富士
            </Label>
            <Label mr={2}>
              <Radio name="templateName" value="origami" onChange={handleRadioChange} />鶴
            </Label>
            <Label>
              <Radio name="templateName" value="flower" onChange={handleRadioChange} />花
            </Label>
          </Flex>

          <EmaSvg message={message} name={name} dateStr={getTodayDateStr()} templateName={templateName} eyeColor={dappyEyeColor} stripeColor1={dappyStripe1Color} stripeColor2={dappyStripe2Color} singleColor={singleColor}></EmaSvg>

          <Button onClick={openModal}>{t.BUTTON_MAKE_EMA}</Button>
        </Box>

        <Box>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={false}
            style={modalStyles}
            contentLabel="Create Ema"
          >
            <h2>{!isTxSealed ? t.MODAL_TITLE_MAKE_EMA : t.MODAL_TITLE_COMPLETED_MAKING_EMA}</h2>
            {!account ? (
              <span>
                <p>{t.MODAL_MESSAGE1}</p>
                <Button mr={2} onClick={() => connectWallet(setAccount)}>{t.MODAL_CONNECT_WALLET}</Button>
                <Button variant='text' onClick={closeModal}>{t.MODAL_CANCEL}</Button>
              </span>
            ) : !isLoading && !txId ? (
              <span>
                <p>{t.MODAL_MESSAGE2}</p>
                <Button mr={2} onClick={mint}>{t.MODAL_SUBMIT}</Button>
                <Button variant='text' onClick={closeModal}>{t.MODAL_CANCEL}</Button>
              </span>
            ) : !isTxSealed ? (
              <span>
                <p>{t.MODAL_MESSAGE3}</p>
                {txId && <p><a style={{ color: '#343D48' }} href={explorerUrl + txId} target={'_blank'}>{t.MODAL_CHECK_ON_FLOWDIVER}</a></p>}
                <Spinner size={32} ml={2} mr={2} />
              </span>
            ) : (
              <span>
                <p>{t.MODAL_MESSAGE4}</p>
                <p><a style={{ color: '#343D48' }} href={locale === 'ja' ? `/ja/view/${account.addr}` : `/view/${account.addr}`}>{t.MODAL_GOTO_MY_EMA}</a></p>
                {txId && <p><a style={{ color: '#343D48' }} href={explorerUrl + txId} target={'_blank'}>{t.MODAL_CHECK_ON_FLOWDIVER}</a></p>}
              </span>
            )}
          </Modal>
        </Box>
      </Container >

      {isTxSealed && <Confetti
        width={width}
        height={height}
      />}
    </Box >
  );
};

export default Create;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6],
  },
  contentWrapper: {
    maxWidth: [null, null, null, 455, 660],
    mx: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    p: {
      color: 'heading',
      fontSize: [0.8, null, null, 1],
      lineHeight: [1.58, 1.58, 1.58, 1.58],
      pb: [2],
    },
    textarea: {
      fontSize: [1, null, null, 2],
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: [2],
      border: '2px solid #888888',
      borderRadius: '6px',
      resize: 'vertical',
      mb: [2],
    },
    'textarea:focus': {
      borderColor: 'var(--theme-ui-colors-primary,#0A8080)',
      boxShadow: '0 0 0 1px var(--theme-ui-colors-primary,#0A8080)',
      outline: 'none',
    },
    input: {
      fontSize: [1, null, null, 2],
      border: '2px solid #888888',
      mb: [2],
    },
    'input:focus': {
      borderColor: 'var(--theme-ui-colors-primary,#0A8080)',
      boxShadow: '0 0 0 1px var(--theme-ui-colors-primary,#0A8080)',
      outline: 'none',
    },
    button: {
      m: [6],
    },
  },
};

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginLeft: '0',
    marginRight: '25px',
    padding: '25px',
  },
};
