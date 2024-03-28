import React, { useEffect } from "react";

/**
 * Khi chúng ta bọc ChildComponent trong React.memo sẽ ghi nhỡ Component này
 * chỉ render lại khi có sự thay đổi của biến props được truyền từ Component cha vào
 * Nếu ta không có biến props nào được truyền từ Component cha => khi bọc sẽ bỏ qua các re-render không cần thiết
 * Sau khi bọc lại nếu có một biến state nào đó của Component cha bị thay đổi
 * mà không phải biến state được truyền là biến props xuống thằng con thì ChildComponent sẽ không bị re-render lại
 * Nhưng nếu ta truyền biến props là 1 funcion thì sẽ bị re-render lại do nó là tham chiếu
 * Ngoài nhận 1 tham số thứ nhất là một Component thì nó sẽ nhận 1 tham số thứ hai là một function
 * sẽ có nhiệm vụ để custom việc so sánh các props trước đó và props hiện tại
 * Lúc này nó sẽ không sử dụng việc so sánh mặc định của React.memo nữa
 * mà sử dụng một custom do chúng ta quy định
 * Mặc định React.memo sẽ thực hiện việc Shallow Comparison (so sánh nông)
 */

const ChildComponent = () => {

    console.log('Child Compoent - render');

    return (
        <p>Child Component</p>
    )
}

export default ChildComponent;
// export default React.memo(ChildComponent);
// export default React.memo(ChildComponent, (prevProp, nextProp) => {
//     return prevProp.name === nextProp.name; // true sẽ không re-render lại
// });
 