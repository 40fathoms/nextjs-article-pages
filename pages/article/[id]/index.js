import React from 'react'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import { useRouter } from 'next/router'
import {server} from '../../../config/index'

const article = (props) => {

    //const router = useRouter()
    //const {id} = router.query

    return (
        <>
            <Meta title={props.article.title} />

            <h1>{props.article.title}</h1>
            <p>{props.article.body}</p>
            <br />

            <Link href='/'>Go back</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles/`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}


/*
//static props
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}
*/

/* server side props
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}*/

export default article