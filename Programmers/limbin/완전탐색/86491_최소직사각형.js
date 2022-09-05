function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    for (let i = 0; i < sizes.length; i++) {
        maxWidth = Math.max(maxWidth, Math.max(sizes[i][0], sizes[i][1]))
        maxHeight = Math.max(maxHeight, Math.min(sizes[i][0], sizes[i][1]))
    }
    return maxWidth * maxHeight
}