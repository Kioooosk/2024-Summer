import React from "react";

export function Step6() {
    return (
        <div style={{ textAlign: 'center' }}> {/* 텍스트와 이미지가 가운데 정렬되도록 스타일 추가 */}
            <p style={{ fontSize: '20px', margin: '0' }}>
                <br /><br />
                아래 프린터기에서 <br />
                환자분의 증명서가<br />
                인쇄되는 중입니다.
            </p>
            <br />
            <img src="../../public/images/down-arrow.png" />
        </div>
    );
}