import React, { useEffect, useRef, useState } from 'react'; 

//리렌더링 방지가 필요하다면 useState 대신 useRef
//컴포넌트의 전체적인 수명과 동일하게 지속된 정보를 일관적으로 제공해야하는 경우

const useRefUse = (): JSX.Element => {
   // const [isMount, setIsMount] = useState(false);
    const isMount = useRef(false); //생명주기가 해당 컴포넌트랑 동일하게 움직임 
    // useEffect(() => {
    //     if (!isMount) {
    //         setIsMount(true);
    //    }
    // }, [isMount])

    useEffect((): () => boolean => {
        isMount.current = true;
        
        return (): boolean => (isMount.current = false);
        
    },[])

	return (
		<>
            <div>{isMount && '컴포넌트 마운트 완료'}</div> 
		</>
	);
};

export default useRefUse;