def solution(sizes):
    # 배열 차원 : NxM, M=2 (negligible)
    for size in sizes:  # O(NMlogM) -> O(N)
        size.sort(reverse=True)

    max_w, max_h = 0, 0
    for size in sizes:  # O(NM) -> O(N)
        max_w = max(max_w, size[0])
        max_h = max(max_h, size[1])
    return max_w * max_h
