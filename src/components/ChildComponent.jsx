import React, { useEffect } from "react";

/**
 * Khi chúng ta bọc ChildComponent trong React.memo sẽ ghi nhỡ Component này
 * chỉ render lại khi có sự thay đổi của biến props được truyền từ Component cha vào
 * Nếu ta không có biến props nào được truyền từ Component cha => khi bọc sẽ bỏ qua các re-render không cần thiết
 * Sau khi bọc lại nếu có một biến state nào đó của Component cha bị thay đổi
 * mà không phải biến state được truyền là biến props xuống thằng con thì ChildComponent sẽ không bị re-render lại
 * Nhưng nếu ta truyền biến props là 1 funcion thì sẽ bị re-render lại do nó là tham chiếu
 */

const ChildComponent = () => {

    console.log('Child Compoent - render');

    return (
        <p>Child Component</p>
    )
}

export default React.memo(ChildComponent);
 