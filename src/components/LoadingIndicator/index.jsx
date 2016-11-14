import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
/* eslint-disable */
import {
  SpinningIcon,
  Box,
  Heading,
} from 'components';
/* eslint-enable */
import styles from './index.module.css';
import messageData from './data/messageData';
import getRandomMessage from './utils';

const LoadingIndicator = ({
  isLoading,
  message,
}) => (
  <Box
    align="center"
    justify="center"
    className={styles.loadingIndicator}
  >
    {isLoading &&
      <Box
        align="center"
        justify="center"
      >
        <SpinningIcon />
        <Heading tag="h3" align="center">{message}</Heading>
      </Box>
    }
  </Box>
);

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

LoadingIndicator.defaultProps = {
  isLoading: true,
  message: getRandomMessage(messageData),
};

export default cssModules(LoadingIndicator, styles);
