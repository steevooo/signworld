import Document, { Html, Head, Main, NextScript } from 'next/document'
const baseurl = process.env.bseurl;
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }

  }
  render() {
    return (
      <Html>
        <Head>
        
       <link rel="icon" href={baseurl+"img/favicon.ico"} type="image/x-icon" />
      <link rel="stylesheet" href={baseurl+"css/ionicons.css"} />
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <link rel="stylesheet" href={baseurl+"css/mdb.min.css"} />
      <link rel="stylesheet" href={baseurl+"css/style.css"} />
      <link rel="stylesheet" href="https://use.typekit.net/uxq8rqj.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

      <script src={baseurl+"js/jquery.min.js"} ></script>
      <script type="text/javascript" src={baseurl+"js/mdb.min.js"}></script>
      <script src={baseurl+"js/custom.js"}></script>
     
       </body>
      </Html>
    )
  }
}

export default MyDocument
