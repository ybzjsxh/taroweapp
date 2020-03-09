/* eslint-disable react/sort-comp */
import Taro, { useState, useEffect } from '@tarojs/taro';
// import { connect } from '@tarojs/redux';
import { Map, View } from '@tarojs/components';

import './index.scss';

// @connect(()=>{})
const Maps: Taro.FC = props => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [markers, setMarkers] = useState<any>([]);
  const [circles, setCircles] = useState<any>(null);

  useEffect(() => {
    const myMap = Taro.createMapContext('mymap');
    Taro.authorize({ scope: 'scope.userLocation' }).then(res => console.log(res));
    Taro.getLocation({ type: 'wgs84' }).then(res => {
      setLatitude(res.latitude);
      setLongitude(res.longitude);
      setMarkers([{ id: 1, name: 'mymap', color: '#f6f6f6', display: 'ALWAYS' }]);
      setCircles({
        latitude,
        longitude: longitude,
        radius: 60,
        fillColor: '#7cb5ec88',
        color: '#ffffff',
      });
    });
    myMap.moveToLocation(myMap);
    return () => {
      Taro.stopLocationUpdate();
    };
  }, []);

  return (
    <View>
      <Map
        id="myapp"
        latitude={latitude}
        longitude={longitude}
        circles={circles}
        scale={15}
        markers={markers}
        show-location={true}
        showScale
        showCompass
        enable3D
        style={{ width: '100vw', height: '70vh' }}
      />
    </View>
  );
};

export default Maps;

Maps.config = {
  navigationBarTitleText: '地图🗺',
};
