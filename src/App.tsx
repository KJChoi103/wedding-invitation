import Gallery from './components/Gallery';
import Greeting from './components//Greeting';
import TitleLayout from './components//Title';
import Location from './components//Location';
import CongratulatoryMoney from './components//CongratulatoryMoney';
import Configs from './configs';
import Share from './components/Share';
import { Layout } from 'antd';
import { styled } from '@stitches/react';

const { Footer } = Layout;

// const MainLayout = styled('div',
//   {
//     content: "",
//     display: 'block',
//     position: 'absolute',
//     'z-index': 100,
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     '-webkit-animation': 'snow 16s linear infinite',
//     animation: 'snow 16s linear infinite',
//     'pointer-events': 'none',
//     'background-size': '450px auto',
//     background: `url("${Configs.bgImages[0]}"),url("${Configs.bgImages[1]}")`
// });



function App() {
  return (
    <main style={{ height: '100%' }}>
      {/*<MainLayout/>*/}
      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <Gallery config={Configs} />
      <Location config={Configs} />
      <CongratulatoryMoney config={Configs} />
      <Share config={Configs} />
      <Footer
        style={{
          background: '#D7CCC8',
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Copyright © 2024 Kyungju Choi
      </Footer>
    </main>
  );
}

export default App;
