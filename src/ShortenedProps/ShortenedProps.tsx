import React, { useEffect, useMemo, useState } from 'react'; 
//curly braces 언제 사용?


export const ShorthandProps = ({isDarkMode, isLogin, ...props}): JSX.Element => {
     
    
	return (
        <header
            isDarkMode={isDarkMode}
            isLogin={isLogin}
            //아래 속성들은 항상 true로 리턴되는걸 알 수 있음
            hasPadding
            isFixed
            isAdmin
        >
            <ChildComponent {...props} />
		</header>
	);
};
