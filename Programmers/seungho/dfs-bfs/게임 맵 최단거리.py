import collections

dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]


def bfs(maps):
    q = collections.deque()
    q.append((0, 0))
    visit = set()
    visit.add((0, 0))

    count = 1
    while q:
        qsize = len(q)
        for i in range(qsize):
            r, c = q.popleft()
            for d in range(4):
                nr, nc = r + dr[d], c + dc[d]
                if not (0 <= nr < len(maps) and 0 <= nc < len(maps[0])):
                    continue
                if maps[nr][nc] == 0:
                    continue
                if (nr, nc) in visit:
                    continue
                if (nr, nc) == (len(maps) - 1, len(maps[0]) - 1):
                    return count + 1
                visit.add((nr, nc))
                q.append((nr, nc))
        count += 1
    return -1


def solution(maps):
    answer = bfs(maps)
    return answer
