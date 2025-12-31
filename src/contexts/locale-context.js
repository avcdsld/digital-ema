import { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const LocaleContext = createContext();

const STORAGE_KEY = 'preferred-locale';

export function LocaleProvider({ children }) {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  // 初回訪問時にlocalStorageまたはブラウザ言語から設定
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && stored !== locale) {
      router.replace({ pathname, query }, asPath, { locale: stored });
    } else if (!stored) {
      // ブラウザ言語を検出
      const browserLang = navigator.language.startsWith('ja') ? 'ja' : 'en';
      if (browserLang !== locale) {
        router.replace({ pathname, query }, asPath, { locale: browserLang });
      }
    }
  }, []);

  const setLocale = (newLocale) => {
    localStorage.setItem(STORAGE_KEY, newLocale);
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const toggleLocale = () => {
    const newLocale = locale === 'ja' ? 'en' : 'ja';
    setLocale(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocaleContext must be used within LocaleProvider');
  }
  return context;
}
