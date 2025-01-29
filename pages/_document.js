import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* logo icon */}
          <link rel="shortcut icon" href="/home/logo.png" />
          {/* css from brootstrap   */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
          {/* google font */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
            rel="stylesheet"
          /> */}
          {/* font awesome cdn */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,400;1,500;1,800;1,900&family=Titillium+Web:wght@200;300;400;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossOrigin="anonymous"
          ></link>
          {/* slice carosoul react start */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />{" "}
          {/* slice carosoul react end */}
          {/* greensock text animate */}
          {/* <link
         href="https://fonts.googleapis.com/css?family=Asap:400,700"
         rel="stylesheet"
         type="text/css"
       ></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
