import React, { useEffect, useState } from 'react'; 


const FlagState = (): JSX.Element => {

    const [hasToken, setHasToken] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasCookie, setHasCookie] = useState(false);
    const [isValidCookie, setIsValidCookie] = useState(false);
    const [isNewUser, setIsNewUser] = useState(false);

    useEffect((): void => {
        //원본
        if (hasToken) {
            setIsLogin(true);
        }
        
        if (hasCookie) {
            setIsLogin(true);
        }
        
        if (isValidCookie) {
            setIsLogin(true);
        }
        
        //1차 수정 :
        if (hasToken &&
            hasCookie &&
            isValidCookie &&
            isNewUser === false &&
            isValidCookie
        ) {
            
            setIsLogin(true);
        }
        
        //2차 수정 -> 밖으로 빼서 useState 사용하지 않아도 됨
        const isLogin =
            hasToken &&
            hasCookie &&
            isValidCookie &&
            isNewUser === false &&
            isValidCookie;
        //추가 적인 요구상항 필요 시 해당 조건만 잘 관리하면 조건 수정 필요 X
        
        if (isLogin) {
            setIsLogin(true);
        }
     },[hasToken, hasCookie, isValidCookie, isLogin])
     
	return (
		<>
            <div>{isLogin && '안녕하세요! 반갑습니다.'}</div>
		</>
	);
};

export default FlagState;