export default {
    state: {
        isCollapse: false // 控制菜单的展开与收起
    },
    mutations: {
        // 修改菜单展开与收起的方法 
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        }
    }
}