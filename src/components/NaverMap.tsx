import { useEffect, useRef } from 'react';

const NaverMap = () => {
  const mapElement = useRef(null);
  const { naver } = window;
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  
  useEffect(() => {
    if (!mapElement.current || !naver) return;
    
    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5087046, 126.8897310);
    const mapOptions = {
      center: location,
      zoom: 15,
      zoomControl: false,
    };
    
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      title:'더 세인트',
      map,
    });
  }, []);
  
  return (
      <div ref={mapElement}
           style={{ minHeight: '400px',
                    width: isPortrait ? '90%' : '60%'
                  }} />
  );
};

export default NaverMap;
