//HOC (High Order Component)?
//컴포넌트 로직을 재사용하기 위한 React 고급 기술, React의 구성적 특성에서 나오는 패턴
//컴포넌트 간에 코드를 공유하기 위해 함수Props를 이용
//RFC : 로직을 컴포넌트간에 공유가 잘 되야함, 굳이 클래스를 선언해서 공유 X 

//useEffect 기명 함수와 함께 사용
useEffect(function isInviewSomeComp() {
    if (isInviewSomeComp(someRef.current)) {
        //some logic
    }
}, [isInview])

//에러 발생 시 유용
//1. console,log
//2. report
//3. monitoring
//4. React Devtools
// =>로그에 쌓임

useEffect(() => {
    document.addEventListener();


    return function removeEvent() {
        document.removeEventListener()
    }
},[])