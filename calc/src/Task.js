const Task = () => {
    const array1 = [
         ['id', 'name', 'age', 'gender'],
         [1, 'krishna', 20, 'female'],
         [2, 'ayushi', 20, 'female'],
         [3, 'xyz', 12, 'male']
    ];

    const array2 = [
         ['id', 'salary', 'name'],
         [1, 15000, 'neelam'],
         [5, 10000, 'jahn']
    ];

    const array3 = [
         ['id', 'qualification'],
         [1, 'BCA'],
         [5, 'MCA'],
         [2, 'MBBS'],
         [6, 'B.tech'],
         [7, 'B.tech']
    ];

    const mergeArrays = (...arrays) => {
         const mergedData = {};
         console.log('arrays',...arrays)
         for (const array of arrays) {
           const [header, ...rows] = array;
       
           for (const row of rows) {
             const id = row[0];
             console.log('row[0]',row[0]);
       
             if (!mergedData[id]) {
               mergedData[id] = {};
             }
             console.log('mergedData[id]',!mergedData[id])
             console.log('rows',rows)
             console.log("header",header);
             for (let i = 0; i < header.length; i++) {
               const key = header[i];
               const value = row[i];
       
               mergedData[id][key] = value;
               console.log("id",key)
             }
           }
         }
       
         return Object.values(mergedData);
       };
       
       const mergedArray = mergeArrays(array1, array2, array3);
       
       console.log('mergedArray',mergedArray);

    return (
         <>
         
         </>
    )
}

export default Task