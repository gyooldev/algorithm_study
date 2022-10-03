def solution(n, times):
    answer = 0

    # 초기 탐색 구간 lr 설정 (1 ~ 적당히 큰값)
    times.sort()
    l = 1
    r = times[-1] * n
    while l <= r:
        m = (l + r) // 2

        # 일률 총합 계산
        person_per_minute = 0
        for time in times:
            person_per_minute += m // time

        # 탐색 범위를 더 작은쪽으로 좁힌다. 같아도 좀더 작은 값 구해볼 여지 있음
        if person_per_minute >= n:
            r = m - 1
            answer = m
        elif person_per_minute < n:  # 탐색 범위를 더 큰쪽으로 좁힌다
            l = m + 1

    return answer
