function getDataFromBackend() {
    const token = localStorage.getItem("token"); 

    return fetch("http://localhost:8081/api/data/6", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiSk9CX1NFRUtFUiIsInN1YiI6ImFtaXRAZ21haWwuY29tIiwiaWF0IjoxNzc1ODkwMzk1LCJleHAiOjE3NzU4OTM5OTV9.PqAf_2clN0DBjknPnSV8wvcJyyd3Kw0pcMizHKt4e5U,   
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Status: " + response.status);
        }
        return response.json();   
    })
    .then((data) => {
        console.log("User Data:", data);

        // access fields
        console.log("Name:", data.name);
        console.log("Email:", data.email);
        console.log("Role:", data.role);

        return data;
    })
    .catch((error) => {
        console.log("Error:", error);
    });
}