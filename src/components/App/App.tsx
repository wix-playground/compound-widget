import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Widget } from '../Widget/Widget';
import { LazyWidget } from '../LazyWidget/LazyWidget';

interface AppProps extends WithTranslation {}

class App extends React.Component<AppProps> {
  render() {

    return (
      <div>
        <div style={{ color: 'red', border: '1px solid black' }}>
          Outside content
        </div>
        <Widget>
          <Widget.PaymentMethodsList />
          <div style={{color: 'red', border: '1px solid black'}}>
            TPAs content inside widget
          </div>
          <Widget.PaymentMethodScreen />
          <Widget.MandatoryFields />
          <div style={{color: 'red', border: '1px solid black'}}>
            TPAs content inside widget
          </div>
          <Widget.SubmitButton />
        </Widget>


        <br />
        <br />
        <br />
        <br />
        Lazy:
        <LazyWidget>
          hello
          <LazyWidget.PaymentMethodsList />

          {/* <LazyWidget.PaymentMethodScreen />
          <LazyWidget.MandatoryFields />

          <LazyWidget.SubmitButton /> */}
        </LazyWidget>
      </div>
    );
  }
}

export default withTranslation()(App);
