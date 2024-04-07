import React, { useEffect, useState } from 'react'; 

const INFO2= { //좋은 케이스, 변치 않기 때문에 바로 바라볼 수 있음
        name: 'My Component',
        value: 'Clean Code React'
}; 
    
const NotUpdateValue = (): JSX.Element => {

    //상수를 다루거나 아니면 일방적인 방치
    //업데이트가 되지 않는 일반적인 객체
    //매번 렌더링 시 같은 값이 더라도 새로 만들어줘야 함, 로직이 없음 => 불필요하게 참조하고 있음 
    //리액트 상태로 바꾸거나 아예 외부로 내보내야함 
    const INFO = {
        name: 'My Component',
        value: 'Clean Code React'
    }; 

    const [count, setCount] = useState(0);

    const onIncrement = (): any => setCount((prevCount): any => prevCount);
    const onDecrement = (): any => setCount((prevCount): any => prevCount);
     
	return (
		<>
            <h3>NotUpdateValue 초기값 선언에 대한 노트입니다.</h3> 
            {/* <header>{INFO}</header> */}
            {/* <ShowCount info={INFO} count={count} /> */}
            {/* <ButtonGroup onDecrement={onDecrement} onIncrement={onIncrement} /> */}
		</>
	);
};

export default NotUpdateValue;