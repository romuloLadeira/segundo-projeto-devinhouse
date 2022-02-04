export const fetchGames = async () =>{
	try {
		const resp = await fetch(process.env.REACT_APP_URL,{
			method:'GET',
			headers:{
				"x-rapidapi-host": process.env.REACT_APP_HOST,
				"x-rapidapi-key": process.env.REACT_APP_KEY
			},			
		})
		const listGames = await resp.json()
		return listGames
	} catch(erro){
		console.error(erro.message)
	}
}

export const fetchGame = async (id) =>{
	try {
		const resp = await fetch(`https://mmo-games.p.rapidapi.com/game?id=${id}`,{
			method:'GET',
			headers:{
				"x-rapidapi-host": process.env.REACT_APP_HOST,
				"x-rapidapi-key": process.env.REACT_APP_KEY
			},			
		})
		const GameInfo = await resp.json()
		return GameInfo
	} catch(erro){
		console.error(erro.message)
	}
}

export const fetchNews = async () =>{
	try {
		const resp = await fetch("https://mmo-games.p.rapidapi.com/latestnews",{
			method:'GET',
			headers:{
				"x-rapidapi-host": process.env.REACT_APP_HOST,
				"x-rapidapi-key": process.env.REACT_APP_KEY
			},			
		})
		const News = await resp.json()
		return News
	} catch(erro){
		console.error(erro.message)
	}
}