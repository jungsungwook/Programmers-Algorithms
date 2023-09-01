function solution(info, edges) {
    var visit = []
    var result = []
    var answer = 0;
    
    visit[0]=1
    answer = dfs(info, edges, 1,0,visit, result);
    var max = 0;
    answer.map((i,j)=>{
        if(max<i) max=i;
    });
    return max;
}
function dfs(info, edges, sheep, wolf, visit, result){
    if(sheep > wolf) result.push(sheep);
    else{
        return result;
    }
    edges.forEach((i)=>{
        if(visit[i[0]] && visit[i[1]]==undefined){
            visit[i[1]]=1
            if(info[i[1]]){
                dfs(info, edges, sheep, wolf+1, visit, result);
            }else{
                dfs(info, edges, sheep+1, wolf, visit, result);
            }
            visit[i[1]]=undefined
        }
    });
    if(result) return result;
}