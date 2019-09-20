let state = {
    color: 'blue'
}

// 渲染应用
function renderApp(state) {
    renderHeader(state);
    renderContent(state);
}
// 渲染title部分
function renderHeader(state) {
    const header = document.getElementById('header');
    header.style.color = state.color;
}

//渲染内容部分
function renderContent(state) {
    const content = document.getElementById('content');
    content.style.color = state.color;
}

renderApp(state);

//点击按钮，更改字体颜色
document.getElementById('to-blue').onclick = function () {
    let state = changeState({
        type:'CHANGE_COLOR',
        color:'rgb(0, 51, 254)'
    })
    renderApp(state);
}

document.getElementById('to-pink').onclick = function () {
    let state = changeState({
        type:'CHANGE_COLOR',
        color:'rgb(247, 109, 132)'
    })
    renderApp(state);
}

function changeState(action){
    switch(action.type){
        case 'CHANGE_COLOR':
            return {
                ...state,
                color: action.color
            }
        default:
            return state;
    }
}