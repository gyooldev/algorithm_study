def get_diff(char):
    return min(ord(char) - ord('A'), ord('Z') - ord(char) + 1)


def solution(name):
    answer = 0

    left_right = len(name) - 1

    up_down = 0
    for i in range(len(name)):
        up_down += get_diff(name[i])

        nxt = i + 1
        while nxt < len(name) and name[nxt] == 'A':
            nxt += 1
        left_right = min(left_right, i + i + len(name) - nxt)
        left_right = min(left_right, (len(name) - nxt) * 2 + i)

    answer = up_down + left_right

    return answer
