import React, { Component } from 'react';
import styles from './styles.module.css';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: typeof window === 'undefined' ? 0 : window.scrollY
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    this.setState({ scrollY: window.scrollY });
  }

  render() {
    const { scrollY } = this.state;

    return (
      <div
        className={styles.bg}
        style={{ backgroundPosition: `8px -${scrollY / 4}px` }}
      />
    );
  }
}

export default Parallax;
