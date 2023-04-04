

const calculate=(request,response)=>{

    const {P,i,n}=request.body
    i=i/100

    const f= P*((((1+i)**n)-1)/i)
    const TotalAmount=P*n
    const Gained= f-TotalAmount

    response.send({f,TotalAmount,Gained})



}

module.exports={calculate}