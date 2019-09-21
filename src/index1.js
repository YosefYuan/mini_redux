function createStore(reducer){
    let state;
    let listeners = [];
    const getState = () => state;
    const subscribe = (ln) => {
        listeners.push(ln);
        const unsubscribe = () => {
            listeners = listeners.filter(listeners !== listener);
        }
        return unsubscribe;
    };
    const dispatch  = (action) => {
        state = reducer(state, action);
        listeners.forEach(ln => ln());
    };
    dispatch({
        type: '@@redux/__INIT__'
    });
    return {
        getState,
        dispatch,
        subscribe
    }
}

const initialState = {
    color: 'blue'
}

function reducer(state=initialState, action){
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

const store = createStore(reducer);

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
    store.dispatch({
        type:'CHANGE_COLOR',
        color:'rgb(0, 51, 254)'
    });
}

document.getElementById('to-pink').onclick = function () {
    store.dispatch({
        type:'CHANGE_COLOR',
        color:'rgb(247, 109, 132)'
    });
}

renderApp(store.getState());

store.subscribe(() => renderApp(store.getState()));