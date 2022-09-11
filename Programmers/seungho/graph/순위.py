INF = 2147483647


def floyd_warshall(n, results):
    global INF

    adj = [[INF for _ in range(n)] for _ in range(n)]

    for i in range(n):
        adj[i][i] = 0

    for r in results:
        winner, loser = r[0] - 1, r[1] - 1
        adj[winner][loser] = 1

    for i in range(n):
        for j in range(n):
            for k in range(n):
                adj[j][k] = min(adj[j][k], adj[j][i] + adj[i][k])
    return adj


def solution(n, results):
    global INF

    answer = 0
    adj = floyd_warshall(n, results)

    for i in range(len(adj)):
        count = 0
        for j in range(len(adj[i])):
            if adj[i][j] != INF or adj[j][i] != INF:
                count += 1
        if count == n:
            answer += 1

    return answer
