import React from 'react'
import Link from 'next/link'
import styles from '../styles/Article.module.css'

const ArticleItem = (props) => {
    return (
        <Link href='/article/[id]' as={`/article/${props.article.id}`}>
            <a className={styles.card}>
                <h3>{props.article.title} &rarr;</h3>
                <p>{props.article.body}</p>
            </a>
        </Link>
    );
}

export default ArticleItem;
