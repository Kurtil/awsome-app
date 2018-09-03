export default {
    deleteUser(userId) {
        return fetch(`http://localhost:3000/users/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
    },
    getAllUsers() {
        return fetch("http://localhost:3000/users", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
    },
    addUser({ firstName, lastName }) {
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName
            })
        })
    }
}