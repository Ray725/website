import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button'
import LinkButton from '../components/LinkButton'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import InfoCard from '../components/InfoCard'
import ResumeCard from '../components/ResumeCard'

const IndexPage = () => (
  <div>
  	<Grid container spacing={24}>
  		<Grid item xs={12}>
	    	<InfoCard title="Columbia University CS Major" date="Class of 2021" description=""></InfoCard>
	    </Grid>
	    <Grid item xs={12}>
    		<ResumeCard date="August 21, 2018" url="https://google.com"></ResumeCard>
	    </Grid>
	    <Grid item xs={12}>
	    	<InfoCard title="Interests" date="not limited to just this list" description="cybersecurity, machine learning, artificial intelligence, blockchain, free and open-source software, trading (on both cryptocurrency and traditional markets)"></InfoCard>
    	</Grid>
	    <Grid item xs={12}>
	    	<InfoCard title="" date="ipfs.io" description="This website is hosted on InterPlanetary File System. For free!"></InfoCard>
    	</Grid>
    </Grid>
  </div>
)

export default IndexPage
