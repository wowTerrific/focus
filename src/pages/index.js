import React from "react"
import Layout from "../components/layout"
import Duk from "../images/duk-min.png"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
	<h3>WebDev</h3>
		<ul>
			<li>MERN Template</li>
			<li>Gatsby Template</li>
		</ul>
	<h3>Fitness</h3>
		<ul>
			<li>Strength Training MWF</li>
			<li>Cardio on Rest days</li>
			<li>Mobility daily</li>
		</ul>
	<h3>Nutrition</h3>
		<ul>
			<li>0.82 grams of protein / 1 lb of bodyweight</li>
			<li>160 lbs bodyweight</li>
		</ul>
	<h3>Meditation</h3>
		<ul>
			<li>20 Minutes Daily</li>
		</ul>
	<h3>Reading</h3>
		<ul>
			<li>20 Minutes Before Bed</li>
		</ul>
	<h3>Finance</h3>
		<ul>
			<li>Save $5k by 1/1/22</li>
		</ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={Duk} alt="duk" style={{width: "100%"}} />
    </div>
  </Layout>
)

export default IndexPage
