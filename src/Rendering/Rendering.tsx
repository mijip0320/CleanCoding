//공백 추가 시
// {' '} => 빈 공백 표시(&nbsp 대신)
// 0은 JSX에서 유효한 값, 그래서 명확한 값으로 true/false로 바꾸는게 좋음!!(삼항연산자로도 사용 가능))
// null은 랜더링 대상이 아님


//리스 내부에서 Key 렌더링 시

export const KeyInList = ( list  : string[]): JSX.Element => {
    return (
        <>
            <ul>
                구분자가 없어서 렌더링 시 문제가 날 수 있음
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>

             <ul>
                인덱스를 넣어줘도 리액트 컴포넌트 입장에서 비교가 잘 되지 않을 수 있음, unique한 값이 아님
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

             <ul>
                구분자가 유니크하지만 고려...
                {list.map((item, index) => (
                   <li key={'prefix' + index}>{item}</li>
                ))}
            </ul>

            <ul>
            범위 데이터를 렌더링 시 돌려야하기 때문에 불필요한 렌더링이 많이 일어남
                {list.map((item) => (
                   <li key={uuidv4()}>{item}</li>
                ))}
            </ul>

             <ul>
                제일 좋은 방법은 item에 id 활용(id는 서버에서 값을 받아올때 넣거나 리스트 생성 시 아이템에 id 부여/새로운 아이템 추가 시 고유 값 추가)
            윈도우 환경에선 crypto.randomUUID() 사용 가능
                {list.map((item) => (
                   <li key={item.id}>{item}</li>
                ))}
            </ul>
        </>
    )
}

//안전하게 RAW HTML 다루기
//RAW HTML ? 서버 데이터가 HTML 형식으로 내려오는 경우
//최악의 예시
const dangerous - () => {
    const post = {
        //악성 스크립트 공격
        content : `<img src="" onerror='alert("you were hacked)'>`
    }

    //const markup = { _html: SERVER_DATA }
    //안전하게 사용
    const sanitized = { _html: DOMPurify.sanitize(SERVER_DATA) }
    return <div>{markup}</div>
}
//1. 렌더링 될 데이터
//2. 유저가 다시 한번 입력모드로 수정할 수 있는 데이터
// - inupt, textarea

//HTML Sanitizer API
//