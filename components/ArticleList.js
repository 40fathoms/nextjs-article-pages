import React from 'react'
import {nanoid} from 'nanoid'

import ArticleItem from './ArticleItem'

import styles from '../styles/Article.module.css'

const ArticleList = (props) => {
    return (
        <div className={styles.grid}>
            {props.articles.map((article) => {
                return <ArticleItem key={nanoid()} article={article} />
            })}
        </div>
    )
}

export default ArticleList