console.log("THE TOTAL COMMISSION THE EMPLOYEE WOULD BE ELIGIBLE IS....!! ");
let sales_rate=prompt("HOW MUCH PRODUCTS DID THE EMPLOYEE SELL??");

let commission=(sales_rate>0 && sales_rate<=5000)?console.log(((sales_rate)*0.02)):
                    (sales_rate>=5001 && sales_rate<=10000)?console.log(((5000*0.02)+((sales_rate-5000)*0.05))) :
                        (sales_rate>=10001 && sales_rate<=20000)?console.log(((5000*0.02)+((10000-5000)*0.05)+((sales_rate-10000*0.07)))):
                            (sales_rate>20000)?console.log(((5000*0.02)+(5000*0.05)+(10000*0.07)+((sales_rate-20000)*(10/100)))):
                                console.log(commission);

