const data = {
    result:'success',    // success: 수신성공, fail:수신실패
    data:[
        {name:'이름1',gender:'남',age:10,blood:'A'},
        {name:'이름2',gender:'여',age:20,blood:'B'},
        {name:'이름3',gender:'남',age:30,blood:'O'},
        {name:'이름4',gender:'여',age:40,blood:'AB'},
        {name:'이름5',gender:'남',age:50,blood:'A'},
    ]
};

//0. 회원의 수
{
if(data.result == 'success'){
    console.log(data.data.length);
    }
}
//1. 회원이름을 콘솔에 출력하기
{
    if(data.result == 'success'){

        data.data.forEach(ele=> console.log(ele.name));
    }
}
//2. 회원 나이의 총합
{
    if(data.result == 'success'){
        let sum = 0;
        data.data.forEach(ele =>sum+=ele.age);
        console.log(`회원 나이의 총합 : ${sum}`);
    };
}
{
    if(data.result == 'success'){
        const result = 
        data.data.reduce((acc,ele)=> acc+ele.age,0);
        console.log(`회원 나이의 총합 : ${result}`);

    };
}

//3 남자회원의 나이 총합 출력하기
{
    if(data.result == 'success'){
        let sum = 0;
        data.data.filter(ele=>ele.gender == '남').forEach(ele=>sum+=(ele.age));
        console.log(sum);
    }
}

{
    if(data.result == 'success'){
        const result = data.data.filter(ele => ele.gender == '남').reduce((acc,ele)=> acc+ele.age,0);
        console.log(`남자회원 나이의 총합 : ${result}`);
        
    }
};

{
    if(data.result == 'success'){
        // const result = data.data.filter((ele,idx,arr) => ele.gender == '남');
        // console.log(result);
        // const final = result.reduce((acc,ele,idx,arr)=> acc + ele.age,0);
        const final = data.data.filter(ele => ele.gender == '남').reduce((acc,ele)=> acc + ele.age,0);
        console.log(`남자회원의 나이 총합 : ${final}`);

    };
};

// //4. 남자회원의 수
// {
//     if(data.result == 'success'){
//         const manCount = data.data.filter(ele=>ele.gender == '남');
//         console.log(manCount.length);
//     }
// }
//4. 남자회원, 여자회원을 분리하여 배열에 저장
{
    if(data.result == 'success'){
        const manMember = data.data.filter(ele=>ele.gender == '남');
        const womanMember = data.data.filter(ele=> ele.gender == '여');
        console.log(manMember,womanMember);
        

        const manMember1 = data.data.reduce((acc,ele,idx,arr)=>{
                            if(ele.gender == '남') acc.push(ele);
                            return acc;
                        },[]);
       
        const womanMember1 = data.data.reduce((acc,ele,idx,arr)=>{
                            if(ele.gender == '여') acc.push(ele);
                            return acc;
                        },[]);
        console.log(manMember1,womanMember1);
    }
}

//5. A형 회원의 나이 총합 구하기
{
    if(data.result == 'success'){
        let sum = 0;
        data.data.filter(ele => ele.blood == 'A').forEach(ele => sum+=(ele.age));
        console.log(sum);
    }
}

{
    if(data.result == 'success'){
        const result = data.data.filter(ele => ele.blood == 'A').reduce((acc,ele)=> acc+ele.age,0);
        console.log(`A형 회원의 나이 총합 : ${result}`);
        
    }
};
{
    if(data.result == 'success'){
        const sum =data.data.filter(ele=>ele.blood=='A')
                            .reduce((acc,ele) => acc+ele.age,0);
        console.log(`A형 회원의 나이 총합 : ${sum}`);
    }
}

//6 name이 이름3인 회원의 혈액형은
{
    if(data.result = 'success'){
        const result = data.data.filter(ele => ele.name == '이름3');
        console.log(result[0].blood)
    }
}
{
    if(data.result = 'success'){
        data.data.filter(ele => ele.name == '이름3').forEach(ele => console.log(`${ele.blood}형 입니다`));
    }
}

{
    
        const result = data.data.filter(ele => ele.name == '이름3');
        console.log(result);
        console.log(`name이 이름3인 회원의 혈액형 : ${result[0].blood}`)
    
}

//7. 혈액형별 인원수 카운트
//결과 : {A:2, B:1, O:1, AB:1}
{
    
    const countOfBloodType =
          data.data.reduce((acc,ele,idx,arr)=>{
            //같은 혈액형 프로퍼티 누적
            //case1)
            // if(acc[ele.blood]){
            //     ++acc[ele.blood];
            // }else {
            //     acc[ele.blood] =1;
            // }
            //case2)
            // acc[ele.blood] = acc[ele.blood] ? ++acc[ele.blood]: 1;
            
            //case3)
            acc[ele.blood] = (acc[ele.blood] || 0) +1;
            
            return acc;
          },{});
    console.log(countOfBloodType);
    console.log(countOfBloodType.A);
    console.log(countOfBloodType['A']);

}

//8. 남성 회원의 평균 연령
{
    // if(data.result = 'success'){ 
    //     const avgOfAge = data.data.reduce((acc,ele,idx,arr) => {
    //         //누적하다 마지막 요소에서 요소갯수로 나누어 반환
    //         //case1)
    //         // if(idx ==arr.length-1){
    //         //     return (acc+ele.age)/arr.length;
    //         // }
    //         // return acc + ele.age;
    //         //case2)
    //         return idx == arr.length-1 ? (acc+ele.age)/arr.length : acc+ele.age;
    //     },0);

    const avgOfAge = data.data.filter(ele => ele.gender == '남')
                              .reduce((acc,ele,idx,arr) => 
        idx == arr.length-1 ? (acc+ele.age)/arr.length : acc+ele.age,0);
    console.log(`남성 회원의 평균 연령 : ${avgOfAge}`);
    
}

//9. 나이가 가장많은 회원의 혈액형은?
{
    // const bloodTypeOfTheOldest =
    //       data.data.reduce((acc,ele,idx,arr)=> {
    //         //요소의 크기가 큰값을 누적값으로
    //         //case1)
    //         // if(acc < ele.age){
    //         //     acc = ele.age;
    //         // }
    //         // return acc;
    //         return (acc < ele.age) ? ele.age : acc;
    //       },0);
    const bloodTypeOfTheOldest =
          data.data.reduce((acc,ele,idx,arr)=> (acc.age < ele.age) ? ele : acc);

    console.log(bloodTypeOfTheOldest);
    console.log(`나이가 가장많은 회원의 혈액형 : ${bloodTypeOfTheOldest.blood}`);
}

//10. 
// [
//     {name:'이름1',age:10},
//     {name:'이름2',age:20},
//     {name:'이름3',age:30},
//     {name:'이름4',age:40},
//     {name:'이름5',age:50},
//   ]
{
    const processedData = data.data.reduce((acc,ele) => {
        acc.push({name:ele.name, age:ele.age});
        return acc;
    },[]);

    console.log(processedData);
    // const newData = data.data;
    // console.log(newData);

}

//11. 수신된 데이터에 남자회원이 있는지 여부
{
    const isExist =
        data.data.some((ele,idx,arr)=> ele.gender == '남')
        console.log(`남자회원이 있는지 여부 ${isExist}`);
};

//12. 수신된 데이터에 모두 남자회원인지 여부
{
    const isExist =
        data.data.every((ele,idx,arr)=> ele.gender == '남')
        console.log(`남자회원이 있는지 여부 ${isExist}`);
};

//13. 여성회원을 나이 내림차순으로 정령하기
{
    const soredMember = 
            data.data.filter(ele=>ele.gender == '여')
                     .sort((e1,e2)=>e2.age-e1.age);
    console.log(soredMember);
}

//14. 여성이면서 혈액형이 'AB'인 첫번째 회원의 이름은?

{
    let name = data.data.filter(ele=>ele.gender == '여' && ele.blood == 'AB')[0].name
    console.log(name);

    name = data.data.find(ele=>ele.gender == '여' && ele.blood == 'AB').name;
    console.log(name);
             
}

        
