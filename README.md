# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React.useMemo

là React Hooks

## React.memo

là Higher-Order Component (nhận một Component và trả về một Component khác)

# React.memo

Chúng ta dùng React.memo khi không muốn component bị re-render mỗi khi component cha re-render

> Các tác nhân làm component re-render: cập nhật state, cập nhật prop, component cha re-render

React.memo là một HOC, vậy nên chỉ cần bao bọc component là được

```jsx
const newComponent = React.memo(Component);
```

React.memo chỉ tác động đến prop, không ảnh hưởng đến state

Cơ chế memo là cơ chế dùng bộ nhớ (RAM) để lưu trữ, vì thế khi dùng những thứ liên quan đến memo nghĩa là chúng ta đang đánh đổi giữa tốn nhiều bộ nhớ hơn để tăng tốc performance.

Vậy nên đừng lạm dụng quá nhé!

# useMemo

Chúng ta dùng `useMemo` khi chúng ta muốn một biến không bị làm mới lại mỗi lần component re-render

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

`useMemo` nhận vào các depedency để quyết định có chạy callback hay không tương tự như bên `useEffect`
