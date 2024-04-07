import React, { useEffect, useReducer, useState } from 'react'; 
    
//useReducer : 구조화 된 상태로 쓸 수 있음

const INIT_STATE = {
    isLoading: false,
    isSuccess: false,
    isFail : false
}

//순수 자바스크립트 
//3rd party library 없이 순수 자바스트립트로 상태관리도 가능

const reducer = (state, action) => { //모든 상태를 추상화 되어서 함수를 호출하는 구문에서는 내부에서 어떤 동작을 하는지 몰라도 action 타입만 바라보고 추론 가능 
    switch (action.type) {
        case 'FETCH_LOADING':
            return { ...state, isLoading : true}
        
        case 'FETCH_SUCCESS':
            return { ...state, isSuccess : true}
        
        case 'FETCH_FAIL':
            return { ...state, isError : true}
        
        default:
            return INIT_STATE;
    }
}

//custom hook 선언 시 use 로 시작해야함 
//객체로 리턴됨
//튜플 형태로 꼭 리턴하지 않아도 됨
const useFetchData = (url) => {
     const [state, dispatch] = useReducer(reducer , INIT_STATE);
     useEffect(() => {
        const fetchData = async() => {
        //fetch Data 시도
        dispatch({ type: 'FETCH_LOADING' });

        await fetch('url').then(() => {
            dispatch({ type: 'FETCH_SUCCESS' });

            }).catch(() => {
            dispatch({ type: 'FETCH_FAIL' });
            });
        }
        
        fetchData();
    }, [url])
    

    return state;
}
const customHook = (): JSX.Element => {
    const {isLoading, isFail, isSuccess} = useFetchData('url')
   

    useEffect(() => {
       // setList(0); <- 여기서 업데이트 시 렌더링 할때 설정되서 문제를 일으킬 수 있음
    }, [])
	return (
		<>
            {isLoading && <div>isLoading!</div>}
            {isFail && <div>isLoading!</div>}
            {isSuccess && <div>isLoading!</div>}
		</>
	);
};

export default customHook;