// pages/_app.js
import "./styles.css";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>;

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
