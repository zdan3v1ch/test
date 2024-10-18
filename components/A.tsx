import Link from 'next/link';
import React from 'react';
import styles from '../styles/link.module.css'

export default function ({ text, href }) {
  return (
    <Link legacyBehavior href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
};
