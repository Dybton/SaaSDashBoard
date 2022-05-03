import './App.css';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import financialData from './data';
import { AppBar, Toolbar, IconButton, Typography, Grid, Box, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
	return (
		<div className="App">
			<Grid container>
				<NavBar />
				<Content />
			</Grid>

		</div>
	);
}

const NavBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						SaaS Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

const Content = () => {
	return (
		<Grid container mt={3} justifyContent="center">
			<Grid item xs={12}>
				<p className="title"> Hello and welcome </p>
			</Grid>
			<Grid item xs={11}>
				<Divider />
			</Grid>
			<ChartGrid />
		</Grid>
	)
}

const ChartGrid = () => {
	return (
		<Grid container ml={1} mr={3} mb={5} spacing={2}>
			<Chart title={"MRR"} dataToShow={'mrr'} />
			<Chart title={"Customers"} dataToShow={"newCustomers"} />
			<Chart title={"Total Revenue"} dataToShow={"totalRevenue"} />
			<Chart title={"Churn rate"} dataToShow={"churn"} />
			<Chart title={"New Customers"} dataToShow={"totalCustomers"} />
			<Chart title={"Churned Customers"} dataToShow={"churnedCustomers"} />
		</Grid>
	)
}

const Chart = ({ title, dataToShow }) => {
	return (
		<Grid item xs={4} mt={3} marginBottom={2}>
			<Box>
				<p>{title}</p>
				<LineChart parseElem={dataToShow} />
			</Box>
		</Grid>
	)
}


const LineChart = ({ parseElem }) => {
	const d3Chart = useRef()
	useEffect(() => {

		// Parse over financial data to get the specific data we are interested in
		function parseData(parseElem) {
			return (financialData).map(elem => ({ month: elem.month, [parseElem]: elem[parseElem] }))
		}
		let newData = parseData(parseElem)


		// Determines the size of the svg
		const margin = { top: 20, right: 30, bottom: 35, left: 50 }
		const width = parseInt(d3.select('#d3demo').style('width'))
		const height = parseInt(d3.select('#d3demo').style('height'))


		// Set up chart
		const svg = d3.select(d3Chart.current)
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


		// Declare the x-axis and insert the x-values
		const x = d3.scaleTime()
			.domain(d3.extent(newData, function (d) { return d.month }))
			.range([0, width])

		let xAxisGenerator = d3.axisBottom(x);

		// Determine the number and format of the ticks
		xAxisGenerator.ticks(24)
		xAxisGenerator.tickFormat(d3.format(""))

		svg.append('g')
			.attr('transform', 'translate(0,' + height + ')')
			// Call the x-axis
			.call(xAxisGenerator)

		// Get the max value of the y-axis data
		const max = d3.max(newData, function (d) { return d[parseElem] })

		// Declare the y-axis and insert the y-values
		const y = d3.scaleLinear()
			.domain([0, max])
			.range([height, 0])

		// Here we call the y-axis
		svg.append('g')
			.call(d3.axisLeft(y))

		// Draw the line
		svg.append('path')
			.datum(newData)
			.attr('fill', 'none')
			.attr('stroke', 'black')
			.attr('stroke-width', 6)
			.attr('d', d3.line()
				.x(function (d) { return x(d.month) })
				.y(function (d) { return y(d[parseElem]) })
			)

		// Add bottom text 
		svg.append('text')
			.attr('x', (width / 2 + 20))
			.attr('y', (margin.top * 11.5))
			.attr('text-anchor', 'middle')
			.attr('font-size', '10px')
			.attr('fill', 'black')
			.attr("text-anchor", "end")
			.text("Months");
	}, [])

	return (
		<div id='d3demo'>
			<svg ref={d3Chart}></svg>
		</div>
	)
}

export default App;
