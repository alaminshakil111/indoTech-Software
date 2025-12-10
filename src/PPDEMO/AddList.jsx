import {React, useEffect, useState} from 'react';

// From Local


const AddList = () => {
    const [list, setList] = useState([])
    const [item, setItem] = useState("")
    
    const addToList=()=>{
        console.log("Before:", list);
        console.log("Item:", item);

        // list.push(item)
        setList([...list, item])

        console.log("After:", list);
    }
    useEffect(() => {
        console.log('After', list );

    }, [list]);

    // const RemoveList = (index)=>{
    //     list.splice(index,1)
    //     setList([...list])
    // }
    
    const RemoveList = (index) => {
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
    };



    return (
        <>
            <div className='m-2'>
                <input onChange={(e)=>setItem(e.target.value) }  className=' border p-1 ' placeholder='Item' />
                <button onClick={addToList} className=" cursor-pointer border bg-gray-200 pl-2 pr-2 rounded ml-2 " > Add </button>
                <table>
                    <tbody>
                        {
                            list.length!==0?(
                                list.map((element, index)=>{
                                    return(
                                        // div can not be child of tbody
                                        // tr can not be child of div
                                        // button can not child of tr
                                        <tr className=" flex gap-2 " >
                                            <td > {element} </td>
                                            <td><button onClick={()=> RemoveList(index)}  className=" cursor-pointer border bg-gray-200 pl-2 pr-2 rounded " > Remove </button></td>
                                        </tr>
                                    )

                                })

                            ): (<tr></tr>)
                        }
                    </tbody>
                </table>
                



            </div>
        </>
    );
};

export default AddList;