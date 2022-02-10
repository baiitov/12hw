import React,{useEffect, useState} from 'react';

const AuthContext = React.createContext({
	isLogin: true
})
export const AuthProvider=(props)=>{
    const [data, setData] = useState([])
	const dataHandler = (newData) => {
		setData([...data, newData])
	}
	useEffect(() => {
		const localData = JSON.parse(localStorage.getItem('key'))
		setData(localData || [])
		console.log(localData)
	}, [])

	useEffect(() => {
		localStorage.setItem('key', JSON.stringify(data))
	}, [data])
return <AuthContext.Provider  value={{data:data, setData:setData, dataHandler:dataHandler}}>
    {props.children}
</AuthContext.Provider>
}
export default AuthContext;                                                 