import React, { Component } from 'react';
import styles from './styles.module.css';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollY: window && window.scrollY ? window.scrollY : 0 };
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
        style={{ backgroundPosition: `8px -${scrollY / 3}px` }}
      />
    );
  }
}

export default Parallax;
