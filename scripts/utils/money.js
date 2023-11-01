export function formatCurrency(priceCents) {
  return (Math.round(priceCents) /100).toFixed(2);
}

export function isWeekend(date){
  let endofweek;

  const dateString = date.format('dddd');

  if(dateString === 'Saturday'){
    endofweek = true;
  } else if(dateString === 'Sunday'){
    endofweek = true;
  } else {
    endofweek = false;
  }

  return endofweek;
}

export default {formatCurrency, isWeekend};
