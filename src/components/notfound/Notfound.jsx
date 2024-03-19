import React from 'react'
import { Helmet } from 'react-helmet'

export default function Notfound() {
  return <>
  <Helmet>Not Found</Helmet>
  <div class="container pt-5 mt-5 text-center">

      <h1>404</h1>
      <p><strong>File not found</strong></p>

      <p>
        The site configured at this address does not
        contain the requested file.
      </p>

      <p>
        If this is your site, make sure that the filename case matches the URL
        as well as any file permissions.
      </p>

    
    </div>
  </>
}
