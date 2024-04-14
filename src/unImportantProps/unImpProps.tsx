import React, { useEffect, useMemo, useState } from 'react'; 
    
export const unImpProps = ({value}): JSX.Element => {
    const [copyValue] = useState(value); 
    
    
	return (
		<div>
			{copyValue}
		</div>
	);
};

export const unImpProps2 = ({value}): JSX.Element => {
    const copyValue = 값비싸고_무거운_연산(value)
    
    
	return (
		<div>
			{copyValue}
		</div>
	);
};

export const unImpProps3 = ({value}): JSX.Element => {
    const copyValue = useMemo(() => 값비싸고_무거운_연산(value, [value]);
    //제일 좋은 건 props로 내려오기 전에 모든 연산을 끝내고 오는 것 
    //웬만하면 복사 안하는게 좋음 
    
	return (
		<div>
			{copyValue}
		</div>
	);
};

