import React from 'react';
import styles from "./cardList.module.css";
import Pagination from '../Pagination/Pagination';

export default function CardList() {
    return (
        <div className={styles.container}>
            <Pagination />
        </div>
    )
}
