import React, { useEffect, useState } from 'react'; 
    
const prevState = (): JSX.Element => {
    const [age,setAge] = useState(0); 
    
    const updateState = () => {
        //위에 state 참고, setState가 비동기적 state 참고 
        setAge(age + 1); //setAget(42+1)
        setAge(age + 1); //setAget(42+1)
        setAge(age + 1); //setAget(42+1) 
    }

    const updaterFunction = () => {
        setAge((prevAge) => age + 1); //setAget(42 => 43)
        setAge((prevAge) => age + 1); //setAget(43 => 44)
        setAge((prevAge) => age + 1); //setAget(44 => 45)

        //여러개의 함수가 state 참조 시 반드시 이전 state를 참고해야함!
        
    }

	return (
		<>
			<h3>useState 초기값 선언에 대한 노트입니다.</h3> 
		</>
	);
};

export default prevState;