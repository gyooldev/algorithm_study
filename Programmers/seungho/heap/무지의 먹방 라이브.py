import heapq


def solution(food_times, k):
    if sum(food_times) <= k:
        return -1

    answer = 0

    pq = []
    for i in range(len(food_times)):
        heapq.heappush(pq, (food_times[i], i + 1))

    remained_time = k
    prev_time = 0
    while remained_time >= (pq[0][0] - prev_time) * len(pq):
        time, idx = heapq.heappop(pq)
        remained_time -= (time - prev_time) * (len(pq) + 1)
        prev_time = time

    pq.sort(key=lambda x: x[1])
    answer = pq[remained_time % len(pq)][1]

    return answer
