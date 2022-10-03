import heapq


def dijkstra(adj, n):
    INF = -1
    dist = [INF for _ in range(n + 1)]
    dist[1] = 0
    hq = []
    heapq.heappush(hq, (0, 1))

    while hq:
        w, v = heapq.heappop(hq)

        for nw, nv in adj[v]:
            if dist[nv] == INF or dist[nv] > dist[v] + nw:
                dist[nv] = dist[v] + nw
                heapq.heappush(hq, (dist[nv], nv))

    return dist


def solution(n, edge):
    answer = 0

    adj = [[] for _ in range(n + 1)]
    for e in edge:
        v1, v2 = e
        adj[v1].append((1, v2))
        adj[v2].append((1, v1))

    dist = dijkstra(adj, n)
    maximum = max(dist)

    for d in dist:
        if d == maximum:
            answer += 1

    return answer
