//명시적으로 닫는 태그가 필요 없음
//기본 HTML 요소인지 아닌지 명확한 차이를 가져야함
//하위에 관련 태그가 필요 없다면 닫는 태그는 불필요 (<Header />, <Footer />)\

export const selfClosingTag = () => {
    return (
        <div>
            <br />
        </div>
    )
    
}

//void element : 닫는 태그는 필요 X
