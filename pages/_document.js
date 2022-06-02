import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}

                </Head>
                <Script
                    id='google-analytics'
                    strategy='afterInteractive'
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <Script
                    id='gtag-init'
                    strategy='afterInteractive'
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                    }}
                />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}