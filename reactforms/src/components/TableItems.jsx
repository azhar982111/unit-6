
export function TableItems({ele}){
    return(
  <tr>
    <td>{ele.name}</td>
    <td>{ele.age}</td>
    <td>{ele.address}</td>
    <td>{ele.department}</td>
    <td>{ele.salary}</td>
    <td>{ele.maritalstate? "Married":"Single" }</td>
    <td>{ele.profilephoto}</td>
  </tr>
    )
}