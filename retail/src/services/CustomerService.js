export async function getAllCustomers() {

    try{
        const response = await fetch('/api/customers', {

            headers: {'Content-Type': 'application/json', 
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJFbWFpbCI6Im5ld0BnbWFpbC5jb20iLCJpYXQiOjE2NjQyNjQwODAsImV4cCI6MTY2NDI3MTI4MH0.WWvKTIffOGgo8eKU8-cVZSvKKVnXZ2GCfYnFlex1JNU'        
        }

        })

        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createCustomer(data) {
    const response = await fetch(`/api/customers`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}