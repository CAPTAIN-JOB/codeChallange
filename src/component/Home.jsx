import React, { useEffect, useState } from "react";
export const url = "http://localhost:3000/transactions";

function Home() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res = res.json()))
			.then((transactions) => console.log(transactions));
	}, []);

	return <div></div>;
}

export default Home;
