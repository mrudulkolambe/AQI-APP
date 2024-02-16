import React, { useEffect, useState } from 'react'

const Home = () => {
	const [data, setData] = useState("");
	function initGeolocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, fail);
		}
		else {
			alert("Sorry, your browser does not support geolocation services.");
		}
	}
	function success(position) {
		// let position = {
		// 	coords: {

		// 	}
		// };
		// position.coords.latitude = 19.119634
		// position.coords.longitude = 72.997541
		let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${position.coords.longitude},${position.coords.latitude}.json?limit=1&access_token=pk.eyJ1IjoicmVzaGF2ZSIsImEiOiJjbHM0eTllMW4wYzFhMnBvMDhxa3d2b2N5In0.OdOyhUEKTrBy1x7c6olH_w`;
		getData(url)
	}

	function fail() {
		alert("Error")
	}
	useEffect(() => {
		initGeolocation()
	}, [])

	async function getData(url) {
		let x = await fetch(url);
		let y = await x.json();
		setData(JSON.stringify(y));
	}

	return (
		<>
			<div className='relative bg z-0' >
				{data}
			</div>
		</>
	)
}

export default Home
