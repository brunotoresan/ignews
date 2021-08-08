import Prismic from '@prismicio/client'

// req for server side rendering (only in getServerSideProps)
// see Prismic docs for more info
export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.client(
        process.env.PRISMIC_ENDPOINT,
        {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return prismic
}