import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 15% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Section ref={ref}>
      <Layout>
        <Title>오시는 길</Title>
        <SubTitle>
          서울 구로구 경인로 662 : 디큐브시티 41층
          <br />
          <br />
          신도림역 5번 출구에서 도보 3분
          <br />
          <br />
          식장 사정으로 축하화환은 정중히 사양합니다.
          <br />
          <br />
          <img
            style={{ width: isPortrait ? '90%' : '60%' }}
            src={config.locationMapImage}
            alt="Wedding Invitation Title Picutre"
          />
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Location;
