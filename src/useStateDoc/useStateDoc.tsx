import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


// 올바른 초기값 설정

// 초기값 ? 
// - 가장 먼저 렌더링 될 때 순간적으로 보여질 수 있는 값
// - 초기에 렌더링 되는 값

// 지키지 않을 경우 ? 
// - 렌더링 이슈, 무한 루프, 타입 불일치로 의도치 않은 동작 => 런타임 에러 발생, undefined 에러 발생
// - 상태를 CRUD 시 상태를 지울 때도 초기값을 잘 기억해놔야 원상태로 돌아감
// - 빈값 ? null 처이응 할 떄 불필요한 방어코드도 줄여줌
    
    
const useStateDoc = (): JSX.Element => {
    const [count, setCount] = useState('0');
    const [list, setList] = useState();
    
    useEffect(() => {
       // setList(0); <- 여기서 업데이트 시 렌더링 할때 설정되서 문제를 일으킬 수 있음
    }, [])
	return (
		<>
			<h3>useState 초기값 선언에 대한 노트입니다.</h3> 
		</>
	);
};

export default useStateDoc;