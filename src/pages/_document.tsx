import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html
        lang={"en"}
        style={{
          height: "100%",
        }}
      >
        <Head />
        <body
          style={{
            height: "100%",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
