import React, { useEffect, useMemo, useState } from 'react'; 
//curly braces 언제 사용?


export const CurlyBraces = (): JSX.Element => {
    
    const styles = {
        backgroundColor: 'blue',
        width : 1000
    }
    
	return (
        <header
            //일반 문자열은 curly braces 생략해도 괜찮음
            //똑같이 넣으면 코드가 혼동될 수 있음
            id={'clean-code'}
            //값이 계산되서 들어가야하는 부분은 curly braces가 필요함
            value={1 + 2}
            //더블 중괄호는 객체를 넣는 것!
            style={{}}
            // = 
            style = {styles}
        >
            { } 사용하는 것이 curly braces
		</header>
	);
};
