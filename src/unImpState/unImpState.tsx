import React, { useEffect, useState } from 'react';
 
//불필요한 상태를 만든다면?

//결국에는 리액트에 의해 관리되는 값이 늘어나는 것
//그러다보면 렌더링에 영향을 주는 값이 능어나서 관리 포인트가 더더욱 늘어나게 됨
    
const unImpState = (): JSX.Element => {
    const [beforeList, setBefore] = useState();
    const [afterList, setAfter] = useState();
    
    //바깥으로 빼서 외부에서 사용 
    //업데이트되는 값이라서 나을 수 있음
    //렌더링 될때마다 값이 바뀌고 관여되는데 굳이 상태로 만들 필요가 없음
    const newList = afterList.filter((user): boolean => user.completed === true);
    //컴포넌트 내부에서의 변수는?
    // 렌더링 마다 고유의 값을 가지는 계산되는 값 

    //아래 useEffect는 필요 X
    useEffect(() => {
        //비효율적!
        const newList = afterList.filter((user) : boolean => user.completed === true)
        setBefore(newList);
    }, [beforeList])
	return (
		<>
			<h3>useState 초기값 선언에 대한 노트입니다.</h3> 
		</>
	);
};

export default unImpState;