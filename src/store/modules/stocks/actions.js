

export default{

   


    async addStock(context, data){
        // if(localStorage.getItem('stock_name')){
        //     alert(localStorage.getItem('stock_name'))
        // }

       
        const stockData = {
           
            stock_name: data.stock_name,
            high: data.high,
            low: data.low,
            open: data.open,
            close: data.close
        }



        
       console.log("I'am here");
       console.log(stockData);


        
        context.commit('addStock', stockData)
        
    },
   
}