import React from 'react';

import Header from './components/Header';
import SectionCards from './components/SectionCards';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

import styles from './style';

function App() {
  return (
    <div className="w-full bg-[#191D29] overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <SectionOne />
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <SectionCards />
        </div>
      </div>
    </div>
  );
}

export default App;
