import React from 'react';
import styles from "./cardList.module.css";
import Pagination from '../Pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';

export default function CardList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    )
}
