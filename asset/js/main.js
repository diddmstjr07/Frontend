// DOM 요소 가져오기
const inputAmountElement = document.getElementById('inputAmount');
const animatedAmountElement = document.getElementById('animatedAmount');

// 사용자로부터 실제 금액 입력 받기
inputAmountElement.addEventListener('change', () => {
    const inputAmount = parseFloat(inputAmountElement.value);
    if (!isNaN(inputAmount)) {
        animateAmount(inputAmount);
    }
});

// 금액 애니메이션 함수
function animateAmount(targetAmount) {
    const initialAmount = 0; // 초기 금액
    const animationDuration = 100; // 4초 동안 애니메이션 실행
    const animationInterval = 1; // 0.1초 간격으로 업데이트

    let currentAmount = initialAmount;
    const updateInterval = setInterval(() => {
        // 금액 업데이트
        currentAmount += (targetAmount - currentAmount) * (animationInterval / animationDuration);
        animatedAmountElement.textContent = `${currentAmount.toFixed(2)} Point`;
        animatedAmountElement.style.display = 'block';

        // 4초 후에 애니메이션 중단 및 실제 입력값 표시
        if (currentAmount >= targetAmount) {
            clearInterval(updateInterval); // 애니메이션 중단
            setTimeout(() => {
                animatedAmountElement.textContent = `Actual Amount: $${targetAmount.toFixed(2)}`;
            }, 100); // 4초 후에 실제 입력값 표시
        }
    }, animationInterval);
}
// 로그아웃 버튼 클릭 시 처리할 함수
function logout() {
    // 로그아웃 로직 추가: 세션 삭제, 로그아웃 API 호출 등
    // 여기에 로그아웃 과정을 구현합니다.

    // 예시: 세션 스토리지에서 로그인 정보 삭제
    sessionStorage.removeItem('loggedInUser');

    // 로그아웃 후 리다이렉션 또는 다른 작업 수행
    // 여기에 로그아웃 후 동작을 정의합니다.
    alert('로그아웃되었습니다.');
    // 로그아웃 후 다른 페이지로 이동하거나 현재 페이지 새로고침 등을 수행할 수 있습니다.
    window.location.href = 'login.html'; // 여기에 이동하고자 하는 파일명을 설정하세요.
}




// 로그아웃 버튼에 이벤트 리스너 추가
document.getElementById('logoutButton').addEventListener('click', function (e) {
    e.preventDefault(); // 기본 동작(링크 이동)을 막습니다.
    logout(); // 로그아웃 함수 호출
});
