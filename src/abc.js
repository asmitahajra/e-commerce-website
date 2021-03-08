//   return (
//     <div>
//       <h>
//         Your Basket (
//         {itemNo}
//         {' '}
//         items)
//       </h>
//       <table className="tableItems">
//         <thead>
//           <tr>
//             <th>ITEM DESCRIPTION</th>
//             <th>UNIT PRICE</th>
//             <th>QUANTITY</th>
//             <th>SUBTOTAL</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr><td>Fruits and Vegetables</td></tr>
//           {cartItems.map((cartItem) => (
//             <tr>
//               <td>
//                 {cartItem.company}
//                 {' '}
//                 {cartItem.name}
//               </td>
//               <td>{cartItem.price}</td>
//               <td>{cartItem.count}</td>
//               <td>{cartItem.count * cartItem.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="lowerContainers">
//         <div className="totalValueContainer">
//           <h2>
//             TOTAL
//             {' '}
//             {totalValue}
//           </h2>
//           <hr />
//           <div className="checkout">
//               {totalValue> 0? ()}
//           </div>

//         </div>
//       </div>

//     </div>
//   );
