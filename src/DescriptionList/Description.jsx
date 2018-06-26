import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Col } from 'antd';

const responsive = {
  1: { xs: 24 },
  2: { xs: 24, sm: 12 },
  3: { xs: 24, sm: 12, md: 8 },
  4: { xs: 24, sm: 12, md: 6 },
};

const Description = ({ term, column, className, children, ...restProps }) => {
  const clsString = classNames("description", className);

  const hintDiv = restProps.hint ? (
    <div
      style={{
        marginTop: -18,
        marginBottom: 2,
        fontSize: 12,
        color: '#f5222d',
        fontWeight: 'bold',
      }}
    >
      {restProps.hint}
    </div>
  ) : null;
  return (
    <Col className={clsString} {...responsive[column]} {...restProps}>
      {term && <div className="term">{term}</div>}
      {children !== null &&
        children !== undefined && <div className="detail">{children}</div>}
      {hintDiv}
    </Col>
  );
};

Description.defaultProps = {
  term: '',
};

Description.propTypes = {
  term: PropTypes.node,
};

export default Description;
