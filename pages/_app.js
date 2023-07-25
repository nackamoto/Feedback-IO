import '@/styles/globals.css'
import AppTheme from '@/context/app-theme'

export default function App({ Component, pageProps }) {
  return (
    <AppTheme>
        <Component {...pageProps} />
    </AppTheme>
  );
}
