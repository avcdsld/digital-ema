/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box, Textarea, Input, Button, Spinner, Container, Flex, Text } from 'theme-ui';
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
  const [templateName, setTemplateName] = useState('horse');
  const [dappyEyeColor, setDappyEyeColor] = useState('#ff5a9d');
  const [dappyStripe1Color, setDappyStripe1Color] = useState('#ffe922');
  const [dappyStripe2Color, setDappyStripe2Color] = useState('#60c5e5');
  const [singleColor, setSingleColor] = useState('#000000');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  Modal.setAppElement('#__next');


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

  // Dappy用カラーパターン（3色セット）
  const dappyColorPresets = [
    { name: 'ポップ', colors: ['#FF5A9D', '#FFE922', '#60C5E5'] },
    { name: 'パステル', colors: ['#94DFF6', '#F6ABBA', '#94DFF6'] },
    { name: 'ネオン', colors: ['#74ee15', '#cae36f', '#6b6b49'] },
    { name: 'サンセット', colors: ['#D61774', '#9D5098', '#1F429C'] },
    { name: 'レトロ', colors: ['#F8EF38', '#8D5FA8', '#211F20'] },
  ];

  // 単色テンプレート用カラーパターン
  const singleColorPresets = [
    { name: '墨', color: '#000000' },
    { name: '朱', color: '#B33E3E' },
    { name: '藍', color: '#2C4A6E' },
    { name: '松', color: '#3A5A40' },
    { name: '藤', color: '#8b81c3' },
  ];

  const selectColorPreset = (index) => {
    setSelectedColorIndex(index);
    if (templateName === 'dappy') {
      const [eyeColor, stripeColor1, stripeColor2] = dappyColorPresets[index].colors;
      setDappyEyeColor(eyeColor);
      setDappyStripe1Color(stripeColor1);
      setDappyStripe2Color(stripeColor2);
    } else {
      setSingleColor(singleColorPresets[index].color);
    }
  };

  const updateSvg = (_message, _name) => {
    setMessage(_message);
    setName(_name);
  }


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

          <Box sx={styles.templateSelector}>
            <Text sx={styles.templateLabel}>デザイン</Text>
            <Flex sx={styles.templateOptions}>
              {[
                { value: 'horse', label: '午' },
                { value: 'fuji', label: '富士' },
                { value: 'origami', label: '鶴' },
                { value: 'flower', label: '花' },
                { value: 'dappy', label: 'Dappy' },
              ].map((option) => (
                <Box
                  key={option.value}
                  sx={{
                    ...styles.templateOption,
                    ...(templateName === option.value ? styles.templateOptionActive : {}),
                  }}
                  onClick={() => setTemplateName(option.value)}
                >
                  {option.label}
                </Box>
              ))}
            </Flex>
            <Box
              sx={styles.colorToggle}
              onClick={() => setShowColorOptions(!showColorOptions)}
            >
              <Text sx={styles.colorToggleText}>
                {showColorOptions ? '▲ 色を閉じる' : '▼ 色を変更'}
              </Text>
            </Box>
            {showColorOptions && (
              <Flex sx={styles.colorPresets}>
                {(templateName === 'dappy' ? dappyColorPresets : singleColorPresets).map((preset, index) => (
                  <Box
                    key={index}
                    sx={{
                      ...styles.colorPresetItem,
                      ...(selectedColorIndex === index ? styles.colorPresetItemActive : {}),
                    }}
                    onClick={() => selectColorPreset(index)}
                  >
                    {templateName === 'dappy' ? (
                      <Flex sx={styles.colorPresetSwatches}>
                        {preset.colors.map((color, i) => (
                          <Box key={i} sx={{ ...styles.colorSwatch, bg: color }} />
                        ))}
                      </Flex>
                    ) : (
                      <Box sx={{ ...styles.colorSwatchSingle, bg: preset.color }} />
                    )}
                    <Text sx={styles.colorPresetName}>{preset.name}</Text>
                  </Box>
                ))}
              </Flex>
            )}
          </Box>

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
                {txId && <p><a style={{ color: '#2C4A6E' }} href={explorerUrl + txId} target={'_blank'}>{t.MODAL_CHECK_ON_FLOWDIVER}</a></p>}
                <Spinner size={32} ml={2} mr={2} />
              </span>
            ) : (
              <span>
                <p>{t.MODAL_MESSAGE4}</p>
                <p><a style={{ color: '#2C4A6E' }} href={locale === 'ja' ? `/ja/view/${account.addr}` : `/view/${account.addr}`}>{t.MODAL_GOTO_MY_EMA}</a></p>
                {txId && <p><a style={{ color: '#2C4A6E' }} href={explorerUrl + txId} target={'_blank'}>{t.MODAL_CHECK_ON_FLOWDIVER}</a></p>}
              </span>
            )}
          </Modal>
        </Box>
      </Container >

      {isTxSealed && (
        <Box sx={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}>
          <Confetti
            width={width}
            height={height}
          />
        </Box>
      )}
    </Box >
  );
};

export default Create;

const styles = {
  section: {
    backgroundColor: '#F8F5EF',
    pt: [14, 14, 14, 18, 18, 18, 20],
    pb: [12, 12, 12, 16, 16, 16, 18],
    position: 'relative',
  },
  heading: {
    maxWidth: [null, null, null, 500, 600],
    mb: [8],
  },
  contentWrapper: {
    maxWidth: [null, null, null, 480, 560],
    mx: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    p: {
      color: '#5C5552',
      fontSize: ['13px', null, null, '14px'],
      lineHeight: 1.8,
      pb: [4],
      textAlign: 'center',
    },
    textarea: {
      width: '100%',
      fontSize: '15px',
      fontFamily: 'body',
      lineHeight: 1.8,
      border: '1px solid #E8E4DC',
      borderRadius: '0',
      bg: '#FFFEF9',
      resize: 'vertical',
      mb: [4],
      p: 4,
      transition: 'all 0.2s ease',
      '&::placeholder': {
        color: '#B8B3AC',
      },
    },
    'textarea:focus': {
      borderColor: '#B33E3E',
      boxShadow: '0 0 0 3px rgba(179, 62, 62, 0.08)',
      outline: 'none',
    },
    input: {
      width: '100%',
      fontSize: '15px',
      border: '1px solid #E8E4DC',
      borderRadius: '0',
      bg: '#FFFEF9',
      mb: [4],
      height: '52px',
      px: 4,
      transition: 'all 0.2s ease',
      '&::placeholder': {
        color: '#B8B3AC',
      },
    },
    'input:focus': {
      borderColor: '#B33E3E',
      boxShadow: '0 0 0 3px rgba(179, 62, 62, 0.08)',
      outline: 'none',
    },
    button: {
      mt: [6],
      mb: [4],
    },
  },
  templateSelector: {
    width: '100%',
    mb: 4,
  },
  templateLabel: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#5C5552',
    letterSpacing: '0.1em',
    mb: 2,
    textAlign: 'center',
  },
  templateOptions: {
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  templateOption: {
    minWidth: '60px',
    px: 3,
    py: 2,
    fontSize: '14px',
    fontWeight: 500,
    color: '#5C5552',
    bg: 'transparent',
    border: '1px solid #D9D4CB',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    userSelect: 'none',
    textAlign: 'center',
    '&:hover': {
      borderColor: '#B33E3E',
      color: '#B33E3E',
    },
  },
  templateOptionActive: {
    bg: '#B33E3E',
    borderColor: '#B33E3E',
    color: '#FFFEF9',
    '&:hover': {
      bg: '#9A3535',
      borderColor: '#9A3535',
      color: '#FFFEF9',
    },
  },
  colorToggle: {
    mt: 3,
    cursor: 'pointer',
    textAlign: 'center',
  },
  colorToggleText: {
    fontSize: '12px',
    color: '#5C5552',
    '&:hover': {
      color: '#B33E3E',
    },
  },
  colorPresets: {
    mt: 2,
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  colorPresetItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: 2,
    border: '1px solid #D9D4CB',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: '#B33E3E',
    },
  },
  colorPresetItemActive: {
    borderColor: '#B33E3E',
    bg: 'rgba(179, 62, 62, 0.05)',
  },
  colorPresetSwatches: {
    gap: '2px',
  },
  colorSwatch: {
    width: '16px',
    height: '16px',
    borderRadius: '1px',
  },
  colorSwatchSingle: {
    width: '24px',
    height: '24px',
    borderRadius: '2px',
  },
  colorPresetName: {
    fontSize: '10px',
    color: '#5C5552',
    mt: 1,
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
    padding: '40px',
    borderRadius: '0',
    border: 'none',
    boxShadow: '0 20px 60px rgba(26, 19, 17, 0.2)',
    backgroundColor: '#FFFEF9',
    maxWidth: '420px',
    width: '90%',
  },
  overlay: {
    backgroundColor: 'rgba(26, 19, 17, 0.7)',
    backdropFilter: 'blur(4px)',
  },
};
