def 거리(현재바위, 기준바위):
    return 현재바위 - 기준바위


def solution(distance, rocks, n):
    answer = 0

    rocks.sort()
    탐색범위_시작 = 1
    탐색범위_끝 = distance - 1

    while 탐색범위_시작 <= 탐색범위_끝:
        쓰레쉬홀드 = (탐색범위_시작 + 탐색범위_끝) // 2

        기준바위 = 0
        바위제거수 = 0
        최소거리 = 2147483647
        for 현재바위 in rocks:
            if 거리(현재바위, 기준바위) >= 쓰레쉬홀드:  # 못지움
                최소거리 = min(최소거리, 현재바위 - 기준바위)
                기준바위 = 현재바위
            else:  # 지움
                바위제거수 += 1

        if 바위제거수 > n:
            탐색범위_끝 = 쓰레쉬홀드 - 1
        else:
            탐색범위_시작 = 쓰레쉬홀드 + 1
            answer = 최소거리

    return answer
