def get_diff(char):
    return min(ord(char) - ord('A'), ord('Z') - ord(char) + 1)


def get_minimum_up_down(name):
    minimum = 0
    for i in range(len(name)):
        minimum += get_diff(name[i])
    return minimum


def get_minimum_left_right(name):
    minimum = len(name) - 1  # 순서대로 읽는 경우

    for i in range(len(name)):
        nxt = i + 1

        while nxt < len(name) and name[nxt] == 'A':
            nxt += 1
        # A를 만나면 돌아가는 경우
        minimum = min(minimum, (i * 2) + (len(name) - nxt))
        # 먼저 뒤로 돌아갔다 시작점으로 오는 경우
        minimum = min(minimum, ((len(name) - nxt) * 2) + i)
    return minimum


def solution(name):
    return get_minimum_up_down(name) + get_minimum_left_right(name)
