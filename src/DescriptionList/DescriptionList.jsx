import React from 'react';
import classNames from 'classnames';
import { Row } from 'antd';
import '../../assets/DescriptionList.css';

const DescriptionList = ({
  className,
  title,
  corner,
  col = 3,
  layout = 'horizontal',
  gutter = 32,
  children,
  size,
  ...restProps
}) => {
  const clsString = classNames("descriptionList", layout, className, size);
  const column = col > 4 ? 4 : col;
  return (
    <div className={clsString} {...restProps}>
      {title ? <div className="title">{title}</div> : null}
      {corner ? <div className="corner">{corner}</div> : null}
      <div style={{ clear: 'both' }} />
      <Row gutter={gutter}>
        {React.Children.map(
          children,
          child => (child ? React.cloneElement(child, { column }) : child)
        )}
      </Row>
    </div>
  );
};

export default DescriptionList;
