import React, { useEffect, useState } from 'react'; 
    
// Single Quote VS Double Quote 
// 1. 팀에서 일반적인 규칙 => 일관성ㅇㄹ 지키기 위함
// 2. HTML ? JAVASCRIPT ? 에서의 차이를 두는지 ?
// 3. 결론적으로 규칙을 정하고 그 맥락을 파악하고 공유하는게 중요 => Lint, 포맷팅 도구(Prettier)에 위임
export const Quotations = (): JSX.Element => {
     

	return (
        <>
            {/* ✅ */}
            <a href="www.naver.com">Clean Code JS</a> 
            
            {/* ❌ */}
            {/* 혼용되어서 single/double quotation이 쓰여지기 때문에 일관성X */}
            <input className='crcc' type="button" value='Clean Code React' /> 
            
            {/* ❌ */}
            {/* 자바스크립트 object의 key와 value로 구분해주고 있기 때문에 single quot으로 수정되야함(기준) */}
			<Clean style={{backgroundPosition: "left"}} /> 
		</>
	);
};

export const PropsNaming = () => {
    //태그에 props 설정 시 카멜케이스로 지향, (_, 파스칼케이스)는 지양
    //컴포넌트 지정 시 파스칼케이스로 네이밍(PascalCase)
    //키 값은 주로 카멜케이스로 표시함
    //인라인 스타일을 지양해야함
    const MyButtonStyle = {
        warning: { backgroundColor: 'yellow', fontSize: '14px' },
        danger : {backgroundColor: 'red', fontSize : '24px'}
    }

    //css in js는 성능에 민감함

    //외부로 분리했기 때문에 스타일 렌더링 될때마다 직렬화되지 않음 => 한번만 실행함
    //동적인 스타일을 실수로 건드는 확률이 적어짐
    //스타일 관련 코드를 분리해서 로직에 집중하고 tsx를 볼 때 조금 더 간결하게 볼 수 있음
    //타입 안정성, export 하는 경우 외부에서 공통적으로 재사용할 수 있음
    const cardCss = {
        self: css({
            backgroundColor: 'white',
            border : '1px solid #ee'
        })
    }
    return (
        <div>
            <button style={MyButtonStyle.warning}>Warning Code Click!</button>
            <button style={MyButtonStyle.danger}>Danger Code Click!</button>
        </div>
    )
}