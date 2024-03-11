const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    if(data.id == "" || data.brand == "" || data.model_number == "" || data.wireless == "" || data.noise_cancellation == "")
    {
        $.toaster({ priority : 'danger', title : 'Error', message : "Something went wrong"})
    }
    else
    {
        fetch('https://headphones-3zk6.onrender.com/api/v1/headphones',
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
          .then(data => console.log(data))
          .then(error => console.log(error))
          $.toaster({priority : 'success', title : 'Headphones', message : "Headphone Entry Successfully Added!"});

    }
});

//http://localhost:8007/api/v1/headphones
