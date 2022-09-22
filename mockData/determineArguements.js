//INPUT-> arg2 : string, object or number
//INPUT-> arg3 : string, object or number
//INPUT-> arg4 : string, object or number
//OUTPUT -> Array [Object, Number, 'string]
//description: accepts arguments in any order and returns them in specific order.  Can be accessed through array deconstruction( const {parmObj, num, flag} = determineArguements(arg2, arg3, arg4));
function determineArguements(arg2, arg3, arg4){
  const allArgs = [];
  if(arg2) allArgs.push(arg2);
  if(arg3) allArgs.push(arg3);
  if(arg4) allArgs.push(arg4);

  const result = {parmObj: undefined, num: undefined, flag: undefined};
  allArgs.forEach(el => {
    if(!el) return;
    if(typeof el === 'object') result.parmObj = el;
    if(typeof el === 'number') result.num = el;
    if(typeof el === 'string') result.flag = el
  })
  if (result.num === undefined) result.num = 1;
  return result;
}

export default determineArguements