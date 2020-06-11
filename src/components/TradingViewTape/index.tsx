import React, { ReactNode } from 'react';

export default class TradingViewTape extends React.Component {
  componentDidMount(): void {
    if (document.getElementById('chart')) {
      const script = document.createElement('script');
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            proName: 'FOREXCOM:SPXUSD',
            title: 'S&P 500',
          },
          {
            description: 'Nasdaq',
            proName: 'QQQ',
          },
          {
            description: 'Mini Indice',
            proName: 'BMFBOVESPA:WIN1!',
          },
          {
            description: 'Mini Dólar',
            proName: 'BMFBOVESPA:WDO1!',
          },
          {
            description: 'IFIX',
            proName: 'BMFBOVESPA:IFIX',
          },
          {
            description: 'IFNC',
            proName: 'BMFBOVESPA:IFNC',
          },
          {
            description: 'IMOB',
            proName: 'BMFBOVESPA:IMOB',
          },
          {
            description: 'IMAT',
            proName: 'BMFBOVESPA:IMAT',
          },
          {
            description: 'INDX',
            proName: 'BMFBOVESPA:INDX',
          },
          {
            description: 'IEEX',
            proName: 'BMFBOVESPA:IEEX',
          },
        ],
        colorTheme: 'light',
        isTransparent: false,
        displayMode: 'regular',
        locale: 'br',
      });

      document.getElementById('chart')?.appendChild(script);
    }
  }

  render(): ReactNode {
    return <div id="chart"> </div>;
  }
}
