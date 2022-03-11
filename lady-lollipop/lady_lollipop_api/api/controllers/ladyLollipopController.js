const ladyLollipopController={
    list:(req,res)=>{
        return res.json([
            {
                type:'sweet',
                stock:50
            },
            {
                type:'drink',
                stock:50
            },
            {
                type:'cake',
                stock:50
            },
        ])
    
    }
}

export default ladyLollipopController;