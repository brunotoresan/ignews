import { NextApiRequest, NextApiResponse  } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query)

    const users = [
        { id: 1, name: 'Bruno' },
        { id: 2, name: 'Leticia' },
        { id: 3, name: 'Bernardo' }
    ]

    return response.json(users)
}