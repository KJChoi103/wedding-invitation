import TitleImage from './resources/Title.png';
import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/wedding_pic_01.jpg';
import GalleryPhoto2 from './resources/wedding_pic_02.jpg';
import GalleryPhoto3 from './resources/wedding_pic_03.jpg';

const isDev = process.env.NODE_ENV === 'development';
const url = isDev?'http://localhost:3000':'https://kjmarryhk.vercel.app/';
const Configs: ConfigsType = {
  url: url,
  kakaoToken: '2c2be54fb20d3be634239d99bcea4bf1',
  kakaoImage: `${url}/resources/Title.png`,
  weddingDate: '2024년 6월 22일, 토 오후 2시',
  weddingLocation: '서울 구로구 경인로 662 : 디큐브시티 41층',
  groom: {
    name: '최경주',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '최규성',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '이순희',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: '김혜랑',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '김강일',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '김문자',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: string[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
