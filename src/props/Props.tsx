import { useMemo, useState } from "react";

//객체 Props 지양하기
export const SomeComponent = ({heavyState}) => {
    //같은 값들을 선언해도 렌더링 시 다르게 인식하기 때문에 불필요한 리렌더링이 발생 할 수 있음
    //변하지 않는 값일 경우 컴포넌트 외부로 드러내기
    //필요한 값만 객체를 분해해서 Props로 내려준다

    const [propArr, setPropArr] = useState(["hello", "hello"]);

    //비싼/복잡한, 너무 잦은 연산이 있을 경우 연산에만 useMemo 사용
    const computedState = useMemo(() => ({
        computedState : heavyState
    }),[heavyState])
    return (
        <ChildComp
            propObj={{ hello: "world" }}
            hello='world'
            arr
            propArr={propArr.at(0)}
            computedState = {computedState}
        />
    )
}