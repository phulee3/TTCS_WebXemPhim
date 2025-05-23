import React, { memo } from 'react';

import LstPhim from '../LstPhim'
import useStyles from './style'
import { underLine, customScrollbar } from '../../../../styles/materialUi'
import TheaterImg from '../../../../components/TheaterImg/TheaterImg';
import TenCumRap from '../../../../components/TenCumRap';

function LstCumRap(props) {
  const { lstCumRap, color } = props;
  const [valueCumRap, setValueCumRap] = React.useState(0);
  const classes = useStyles({ underLine, customScrollbar, color });
  const handleChangeCumRap = (e) => {
    setValueCumRap(Number(e.currentTarget.getAttribute("index")));
  };
  return (
    <div className={classes.flexCumRap}>
      <div className={classes.lstCumRap}>
        {lstCumRap.map((cumRap, index) =>
        (
          <div
            className={`${classes.cumRap} ${valueCumRap === index ? classes.cumRapActive : ""}`}
            index={index}
            onClick={handleChangeCumRap}
            key={cumRap.maCumRap}
            style={{ opacity: valueCumRap === index ? '1' : '.5' }}
          >
            <TheaterImg nameTheater={cumRap.tenCumRap} imgStyle={classes.cumRap__img} />
            <div className={classes.cumRap__info}>
              <TenCumRap tenCumRap={cumRap.tenCumRap} />
              <p className={classes.cumRap__address}>{cumRap.diaChi}</p>
            </div>
          </div>
        )
        )}
      </div>
      {lstCumRap.map((cumRap, index) => (
        <LstPhim lstPhim={cumRap.danhSachPhim} key={cumRap.maCumRap} hidden={valueCumRap !== index} />
      ))}
    </div>
  );
}
export default memo(LstCumRap)

