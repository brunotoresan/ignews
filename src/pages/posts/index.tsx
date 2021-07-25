import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
          <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>25 de julho de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>Ultimamente o termo serverless entrou em ascensão e muito se comenta sobre aplicações utilizarem essa arquitetura como forma de se ganhar performance evitando a configuração de servidores complexos através de containers ou até de arquiteturas mais tradicionais.</p>
          </a>
          <a href="">
            <time>25 de julho de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>Ultimamente o termo serverless entrou em ascensão e muito se comenta sobre aplicações utilizarem essa arquitetura como forma de se ganhar performance evitando a configuração de servidores complexos através de containers ou até de arquiteturas mais tradicionais.</p>
          </a>
          <a href="">
            <time>25 de julho de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>Ultimamente o termo serverless entrou em ascensão e muito se comenta sobre aplicações utilizarem essa arquitetura como forma de se ganhar performance evitando a configuração de servidores complexos através de containers ou até de arquiteturas mais tradicionais.</p>
          </a>                    
        </div>
      </main>
    </>
  )
}