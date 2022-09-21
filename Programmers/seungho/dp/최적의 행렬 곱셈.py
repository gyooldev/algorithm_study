INF = 2147483647


def top_down(dp, matrix, start, end):
    global INF

    if start == end:
        dp[start][end] = 0
        return 0

    if dp[start][end] != INF:
        return dp[start][end]

    minimum = INF
    for i in range(end - start):
        minimum = min(minimum,
                      top_down(dp, matrix, start, start + i) + \
                      top_down(dp, matrix, start + i + 1, end) + \
                      matrix[start][0] * matrix[start + i][1] * matrix[end][1])
    dp[start][end] = min(minimum, dp[start][end])
    return dp[start][end]


def solution(matrix_sizes):
    global INF

    dp = [[INF for _ in range(len(matrix_sizes))] for _ in range(len(matrix_sizes))]

    top_down(dp, matrix_sizes, 0, len(matrix_sizes) - 1)
    answer = dp[0][-1]
    return answer

print(solution(	[[5, 3], [3, 10], [10, 6]]))
