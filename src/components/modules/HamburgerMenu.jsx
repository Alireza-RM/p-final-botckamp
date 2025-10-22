import Link from 'next/link';
import { useRouter } from 'next/router';

import HomeSvg from '../atoms/svg/HomeSvg';
import AirplanSvg from '../atoms/svg/AirplanSvg';
import VolumSvg from '../atoms/svg/VolumSvg';
import PhoneSvg from '../atoms/svg/PhoneSvg';

import styles from './HamburgerMenu.module.css'

function HamburgerMenu({ isHamberOpen, setIsHamberOpen }) {

  const { pathname } = useRouter();

  return (
    <div className={styles.displayNone}>
      <div
        className={`${styles.modalBackground} ${isHamberOpen ? styles.show : ""}`}
        onClick={() => setIsHamberOpen(false)}
      ></div>

      {/* منوی کناری */}
      <div className={`${styles.hamburgerMenu} ${isHamberOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setIsHamberOpen(false)}>
          ✕
        </button>
        <div className={styles.menuContent}>

          <div className={styles.navList}>
            <ul>

              <li>
                <Link href="/" onClick={() => setIsHamberOpen(false)}>
                  <div className={styles.innerLink}>
                    <HomeSvg styles={styles} pathname={pathname} />
                    <p className={pathname === "/" ? styles.active : "#282828"}>صفحه اصلی</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/tourServices" onClick={() => setIsHamberOpen(false)}>
                  <div className={styles.innerLink}>
                    <AirplanSvg styles={styles} pathname={pathname} />
                    <p className={pathname === "/tourServices" ? styles.active : "#282828"}>خدمات گردشگری</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/about-us" onClick={() => setIsHamberOpen(false)}>
                  <div className={styles.innerLink}>
                    <VolumSvg styles={styles} pathname={pathname} />
                    <p className={pathname === "/about-us" ? styles.active : "#282828"}>درباره ما</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/contact-us" onClick={() => setIsHamberOpen(false)}>
                  <div className={styles.innerLink}>
                    <PhoneSvg styles={styles} pathname={pathname} />
                    <p className={pathname === "/contact-us" ? styles.active : "#282828"}>تماس با ما</p>
                  </div>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div >
  );
}

export default HamburgerMenu;
