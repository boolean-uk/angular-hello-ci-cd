import { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

const handler: Handler = async () => {
  const apiKey = process.env['APILEAGUE_API_KEY']
  const apiUrl = 'https://api.apileague.com/retrieve-random-meme'

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'x-api-key': apiKey ?? ''
      }
    })

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: `API error: ${response.statusText}`
      }
    }

    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error: any) {
    return {
      statusCode: 500,
      body: `Server error: ${error.message}`
    }
  }
}

export { handler }
