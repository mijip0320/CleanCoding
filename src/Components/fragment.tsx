//fragment 지향/지양
//지향 포인트 : 
// - React.Fragment => <></> 명시적 선언 사용 가능
// - 단일 요소/노드를 내보낼때 사용함(jsx 구조에서 사용함 )-> 런타임에선 날라감
//지양 포인트: 
// - 컴포넌트 구조가 깊어질때 개행 하나라도 줄여야힘
// - 굳이 컴포넌트로 감싸서 리턴할 필요가 없음
// - 아무것도 렌더링 하지 않을때 <></> 불필요한 표기 -> null로 표기하기

import { forwardRef } from "react"


export const fragment = () => {
    return (
        <div>
            <br />
        </div>
    )
    
}


//컴포넌트 네이밍
// 대문자 => 컴포넌트 이름
// 소문자 => 기본 HTML 요소
//route based file name(kebab-case)
//  - component-naming.jsx => <ComponentNaming />
//  - ComponentNaming/index.tsx =>  <ComponentNaming />


//JSX 컴포넌트 함수로 반환:
//scope가 꼬일 수 있음
//반환값이 무엇인지 알기 어려움
//컴포넌트 일때는 컴포넌트로 넘기고, 연산은 함수로 넘김

export const Functional = () => {

    const renderMAin = (): JSX.Element => {
        return <>MAIN</>
    }
    return (
        <div>
            {renderMAin()}
        </div>
    )
    
}


//컴포넌트 내부에 컴포넌트 선언
//웬만하면 외부로 드러내서 사용하는것이 좋음
//1. 결합도가 증가
//  - 구조적으로 스코프적으로 종속된 개발이 됨
//  - 나중에 확장성이 생겨서 분리될 때 굉장히 힘들어짐
//2. 성능 저하 : 
//  - 상위 컴포넌트 리렌더 ? => 하위 컴포넌크 재생성

//displayName ? 
//디버깅 툴 => 컴포넌트에 이름을 부여, devTool에 표기됨
const InputText = forwardRef((props, ref) : Element => {
  return <input type="text" ref={ref} />
})

=> InputText.displayName = 'InputText' //Component.name 속성도 존재


//컴포넌트 구성 방법:
// 상수는 상단에 고정
// type 선언 시 interface 선언(타입스크립트)
// 컴포넌트 명과 일치하는 props 타입 선언하는게 좋음
// 함수표현식, 함수 선언문
// ref와 3rd party library는 상단에 고정(컴포넌트 내부에서)
// useEffect는 최소화하는 것이 좋음
// 반환 하는ㄴ 부분은 개행을 통해 구분
//styled component는 하단에 넣는 것을 선호