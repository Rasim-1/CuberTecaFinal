import React from 'react';
import StandartInfo2 from '../Component/StandartInfo2/StandartInfo2';
import ZonaStart from '../Component/ZonaStart/ZonaStart';
import Booking from '../Component/Booking/Booking';

const ZoneSinglePage1 = ({ bookRef }) => {
  return (
    <>
      <StandartInfo2 />
      <ZonaStart text={"СТАНДАРТ+"} color={"blue"} />
      <Booking bookRef={bookRef} />
    </>
  );
};

export default ZoneSinglePage1;
