new gridjs.Grid({

    search: true,
    sort: true,
    pagination: true,
    fixedHeader: true,
    height: "90%",

    columns: [
        { name: "id",  width: "100px" },
        { name: "brand", width: "100px" },
        { name: "model_number", width: "100px" },
        { name: "wireless", width: "100px" },
        { name: "noise_cancellation", width: "100px" } ],

        server: {
            url: "http://localhost:8007/api/v1/headphones",
            then: (data) =>
            {
                data.sort((a,b) => b.id - a.id);
                data.sort((c,d) => c.brand - d.brand);

                return data.map((headphones) => [
                    headphones.id,
                    headphones.brand,
                    headphones.model_number,
                    headphones.wireless,
                    headphones.noise_cancellation
                ]);
            } 
            
        },
    }).render(document.getElementById("table"));

    
   