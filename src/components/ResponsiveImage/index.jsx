import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import { Animate } from 'components'; // eslint-disable-line
import styles from './index.module.css';

class ResponsiveImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    matchHeight: PropTypes.bool.isRequired,
    alt: PropTypes.string.isRequired,
  };
  static defaultProps = {
    matchHeight: true,
    alt: 'Missing visual',
    src: 'https://github.com/udacityalumni/alumni-client/blob/master/app/src/components/ResponsiveImage/missing-visual.png?raw=true',
  };
  constructor() {
    super();
    this.setImageLoadedState = this.setImageLoadedState.bind(this);
    this.state = {
      isLoaded: false,
    };
  }
  setImageLoadedState() {
    this.setState({
      isLoaded: true,
    });
  }
  render() {
    const {
      src,
      alt,
      matchHeight,
    } = this.props;
    return (
      <Animate
        visible={this.state.isLoaded}
        enter={{ animation: 'fade', duration: 1000 }}
        keep
      >
        <div
          className={matchHeight ? styles.responsiveImageMatchHeight : styles.responsiveImage}
        >
          <img
            alt={alt}
            onLoad={this.setImageLoadedState}
            src={src}
          />
        </div>
      </Animate>
    );
  }
}

export default cssModules(ResponsiveImage, styles);
