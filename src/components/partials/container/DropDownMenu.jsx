
import { forwardRef, useEffect } from "react";
import styles from './DropDownMenu.module.css'
import Image from "next/image";
import Link from "next/link";

const DropDownMenu = forwardRef(({ value, onChange, open: openState, setOpen, children }, ref) => {

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
                {
                    children
                }
            </div>
        </div >
    );
});

DropDownMenu.displayName = "DropDownMenu";

export default DropDownMenu;
