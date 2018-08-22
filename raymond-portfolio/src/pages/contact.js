import React from 'react'
import Link from 'gatsby-link'

import Grid from '@material-ui/core/Grid'
import InfoCard from '../components/InfoCard'
import LinkedInCard from '../components/LinkedInCard'

const ContactPage = () => (
  <div>
  	<Grid container spacing={24}>
  		<Grid item xs={12}>
	    	<InfoCard title="Email" date="" description="li.raymond@columbia.edu"></InfoCard>
	    </Grid>
	    <Grid item xs={12}>
	    	<InfoCard title="Number" date="" description="435-994-2423"></InfoCard>
	    </Grid>
	    <Grid item xs={12}>
	    	<LinkedInCard date="August 18, 2018" url="https://www.linkedin.com/in/raymond-li-768b10150/"></LinkedInCard>
	    </Grid>
    </Grid>
  </div>
)

export default ContactPage
