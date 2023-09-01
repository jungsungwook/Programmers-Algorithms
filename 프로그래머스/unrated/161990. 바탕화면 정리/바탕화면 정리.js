function solution(wallpaper) {
    let numIsList = [];
    let min_y = Infinity
    let max_y = -1;
    let min_x = 0;
    let max_x = wallpaper.length;
    wallpaper.forEach((w, i) => {
        const min = w.indexOf('#')
        const max = w.lastIndexOf('#')
        if (min == -1) {
            return;
        }
        numIsList.push(i)
        if (min <= min_y) min_y = min;
        if (max >= max_y) max_y = max;
    })
    max_y += 1;
    min_x = Math.min(...numIsList);
    max_x = Math.max(...numIsList);
    return [min_x, min_y, max_x+1, max_y];
}