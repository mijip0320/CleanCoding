
//...props 주으할 점
//코드를 예측하기 힘듦

export const ParentComponent = (props) => {
    const { 관련없는 props, 관련있는 props, ...나머지 props } = props;

    return <div
        관련없는 props={관련없는 props}
        {...나머지 props}
    ></div>
}


//너무 많은 props를 넘기는 경우
//=> 결과 보다는 실행 => 분리의 대상?
//=> tanstack query, form library, 상태관리자, context api, composition 고려 가능
export const SpreadProps = () => {

    //Step1 :one depth 분리
    //Step2 : 확장성을 위한 분리를 위해 도메인 로직을 다른 곳으로 모아넣음

    return (
        <div>
            <JoinForm 
                 
                onSubmit={handleSubmit}
                onReset={handleReset}
                onCancel = {handleCancel}
            >

                <UserForm
            user={user}
                />
                <AuthForm
                 auth={auth}
                />
                <LocationForm
                 location={location}
                />
                <FavoriteForm
                    favorite={favorite}
                />

        </JoinForm>
        </div>
    )
}

//객체를 통으로 props로 넘기는 경우
export const sendProps = ({props}) => {
    //불필요한 props 넘김
    
}