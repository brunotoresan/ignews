import { query } from 'faunadb'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      scope: 'read:user'
    })
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user

      try {
        await fauna.query(
          query.Create(
            query.Collection('users'),
            { data: { email } }
          )
        )

        return true
      } catch {
        return false
      }
    },
  }
})