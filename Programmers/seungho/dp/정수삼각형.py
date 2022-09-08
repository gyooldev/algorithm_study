def solution(triangle):
    answer = 0
    height = len(triangle)
    partial_sum = [[0 for _ in range(height)] for _ in range(height)]
    partial_sum[0][0] = triangle[0][0]
    for i in range(1, height):
        for j in range(len(triangle[i])):
            if j == 0:
                partial_sum[i][j] = partial_sum[i - 1][j] + triangle[i][j]
            elif j == len(triangle[i]) - 1:
                partial_sum[i][j] = partial_sum[i - 1][j - 1] + triangle[i][j]
            else:
                partial_sum[i][j] += max(partial_sum[i - 1][j - 1], partial_sum[i - 1][j]) + triangle[i][j]

    answer = max(partial_sum[-1])

    return answer
