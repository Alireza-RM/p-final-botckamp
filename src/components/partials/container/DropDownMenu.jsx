
import { forwardRef, useEffect } from "react";
import styles from './DropDownMenu.module.css'
import Image from "next/image";

const DropDownMenu = forwardRef(({ open: openState, setOpen }, ref) => {

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [ref, setOpen]);

    return (
        <div className={`${styles.container} ${openState ? styles.open : ""}`} ref={ref} >
            <div className={`${styles.menuDropdown} ${openState ? styles.open : ""}`}>
                <div className={`${styles.menuItem} ${styles.menuItemFixed}`}>
                    <div className="">
                        <Image src="/images/profile (2).png" width={100} height={100} alt="profile-logo" />
                    </div>
                    <p>0922526847</p>
                </div>
                <div href="#" className={styles.menuItem}>
                    <div>
                        <Image src="/images/profile (3).png" width={100} height={100} alt="profile-logo" />

                    </div>
                    <p>اطلاعات حساب کاربری</p>
                </div>
                <div href="#" className={`${styles.menuItem} ${styles.logout}`}>
                    <div>
                        <Image src="/images/logout.png" width={100} height={100} alt="logout-logo" />
                    </div>
                    <p>خروج از حساب کاربری</p>
                </div>
            </div>
        </div >
    );
});

DropDownMenu.displayName = "DropDownMenu";

export default DropDownMenu;
