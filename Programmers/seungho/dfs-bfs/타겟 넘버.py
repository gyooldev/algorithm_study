found = 0


def dfs(numbers, idx, acc, target, depth):
    global found

    if depth == 0:
        if acc == target:
            found += 1
        return

    dfs(numbers, idx + 1, acc + numbers[idx], target, depth - 1)
    dfs(numbers, idx + 1, acc - numbers[idx], target, depth - 1)


def solution(numbers, target):
    global found

    dfs(numbers, 0, 0, target, len(numbers))

    return found
