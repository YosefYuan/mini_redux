function createStore(){
    let state = {
        color: 'blue'
    }
    const getState = () => state;
    const changeState = (action) => {
        switch(action.type){
            case 'CHANGE_COLOR':
                state = {
                    ...state,
                    color: action.color
                }
                return state;
            default:
                return state;
        }
    }
    return {
        getState,
        changeState
    }
}

function renderApp(state){
    renderHeader(state);
    renderContent(state);
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

//点击按钮，更改字体颜色
document.getElementById('to-blue').onclick = function () {
    store.changeState({
        type:'CHANGE_COLOR',
        color:'rgb(0, 51, 254)'
    });
    renderApp(store.getState());
}

document.getElementById('to-pink').onclick = function () {
    store.changeState({
        type:'CHANGE_COLOR',
        color:'rgb(247, 109, 132)'
    });
    renderApp(store.getState());
}

const store = createStore();
renderApp(store.getState());