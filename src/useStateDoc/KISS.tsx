import React, { useEffect, useState } from 'react'; 

//연관된 상태 단순화하기
//Keep IT Simple Stupid => 복잡한 것 보단 낫다

//1 : N 상태로 useState를 보여줄 수 있음 

//타입 스크립트 사용 안할 때 안전하게 사용하는 방법 :
const PROMISE_STATE = {
    PENDING : 'pending',
    LOADING : 'loading',
    FINISH: 'finish',
    ERROR : 'error'
}
const KISS = (): JSX.Element => {
    //세 상태가 연관이 되어 있음
    const [isLoading, setIsLoading] = useState(false);
    const[isFinish, setIsFinish] = useState(false);
    const [isError, setIsError] = useState(false);
//개선된 방안
    const [promiseState, setPromiseState] = useState<'Loading' | 'Success' | 'Error' | 'Pending'>();

    //연관된 상태 객체로 묶어내기:
    const [fetchState, setFetchState] = useState({
        isLoading: false,
        isFinish: false,
        isError: false
    })

    const fetchData = () => {

        //fetch Data 시도
        setIsLoading(true);

        //개선된 방안
        setPromiseState('Loading');

        //연관된 객체로 setState
        setFetchState((prevState) => {
            ...prevState,
            isLoading: true
            //isFinish: false,
            //isError : false
        })

        fetch('url').then(() => {
            //fetch Data 성공
            setIsLoading(false);
            setIsFinish(true);
        //개선된 방안
            setPromiseState('Success')

             //연관된 객체로 setState
        setFetchState({
            isLoading: false,
            isFinish: true,
            isError : false
        })
        }).catch(() => {
            setIsError(true);
            //개선된 방안
            setPromiseState('Error')

            //연관된 객체로 setState
        setFetchState({
            isLoading: false,
            isFinish: false,
            isError : true
        })
        })
    }
    
    useEffect(() => {
       // setList(0); <- 여기서 업데이트 시 렌더링 할때 설정되서 문제를 일으킬 수 있음
    }, [])
	return (
		<>
            {isLoading && <div>isLoading!</div>}
            {isFinish && <div>isFinished!</div>}
            {isError && <div>isError!</div>}
{/* 개선된 방안 */}
            {promiseState === 'Loading' && <div>isLoading!</div>}
            {promiseState === 'Success' && <div>isFinished!</div>}
            {promiseState === 'Error' && <div>isError!</div>}

            {/* 연관된 객체로 설정 */}
            {fetchState.isLoading && <div>isLoading!</div>}
            {fetchState.isFinish && <div>isFinished!</div>}
            {fetchState.isError && <div>isError!</div>}
		</>
	);
};

export default KISS;