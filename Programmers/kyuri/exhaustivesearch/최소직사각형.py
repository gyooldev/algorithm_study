def solution(sizes):
    w = 0
    v = 0
    for arr in sizes:
        arr.sort()
        if(arr[0] > w):
            w = arr[0]
        if(arr[1] > v):
            v = arr[1]
    answer = w * v
    return answer