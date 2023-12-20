import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const Display = useSelector((state) => {
    return state.showing;
  });

  const disp = Display.data[0];
  console.log("clled display but not comming");
  console.log(disp);
  return (
    <div>
      <table>
        <tr>
          <th>title</th>
          <th>description</th>
        </tr>
        <tbody>
          {disp.map((item, i) => (
            <>
              <tr>
                <td>{item.id}</td>
                <td> {item.title}</td>
                <td><img src={item.url}/></td>
              </tr>
              {/* <li key={i}>Name: {item.name}</li>
              <li>UserName: {item.city}</li> */}
              {/* <li>Email: {item.email}</li> */}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//  {
//    disp.map((item, i) => (
//      <>
//        <li key={i}>Name: {item.name}</li>
//        <li>UserName: {item.city}</li>
//        {/* <li>Email: {item.email}</li> */}
//      </>
//    ));
//  }
