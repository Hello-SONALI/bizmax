import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Bizmax - Creative Agency Template</title>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="assets/css/plugins/bootstrap.min.css"/>
    <link rel="stylesheet" href="assets/css/plugins/fontawesome.min.css"/>
    <link rel="stylesheet" href="assets/css/plugins/slick.css"/>
    <link rel="stylesheet" href="assets/css/plugins/animate.css"/>
    <link rel="stylesheet" href="assets/css/plugins/swiper.min.css"/>
    <link rel="stylesheet" href="assets/css/plugins/odometer.css"/>
    <link rel="stylesheet" href="assets/css/default.css"/>
    <link rel="stylesheet" href="assets/css/style.css"/>

      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="assets/js/plugins/jquery-3.6.0.min.js"></script>
    <script src="assets/js/plugins/isotope.pkg.min.js"></script>
    <script src="assets/js/plugins/jquery.slick.min.js"></script>
    <script src="assets/js/plugins/odometer.js"></script>
    <script src="assets/js/plugins/ripples.min.js"></script>
    <script src="assets/js/plugins/wow.min.js"></script>
    <script src="assets/js/plugins/swiper.min.js"></script>
    <script src="assets/js/main.js"></script>
      </body>
    </Html>
  )
}
