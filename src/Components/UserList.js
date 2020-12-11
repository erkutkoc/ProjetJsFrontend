let userList = document.querySelector("#userList");
import {getUserSessionData} from "../utils/session.js";
import {API_URL} from "../utils/server.js";


//Create User List
const UserList = () => {
    const userCredential = getUserSessionData();

    function listRenderer(data) {
        data.forEach((element) => {
            let addUserList;
            if (getUserSessionData()) {

                if (!element.connected) {
                    addUserList = `<ul class="list-group bg-dark">
                                       <li class="list-group-item bg-secondary d-flex justify-content-between align-items-center">
                                       ${element.username}
                                         <span class="badge badge-primary badge-pill">Hors Ligne</span>
                                       </li>
                                    </ul>`;
                    userList.innerHTML += addUserList;
                } else {
                    addUserList = `<ul class="list-group bg-dark">
                                       <li class="list-group-item bg-secondary d-flex justify-content-between align-items-center">
                                        ${element.username}
                                         <span class="badge badge-success badge-pill">En ligne</span>
                                       </li>
                                    </ul>`;
                    userList.innerHTML += addUserList;
                }
            } else {
                return userList.innerHTML = '';

            }
        });
        return userList;
    }

    if (userCredential) {
        fetch(API_URL + "users", {
            method: "GET",
            headers: {
                "Authorization": userCredential.token
            },
        }).then((response) => {
            if (!response.ok) {
                let fullErrorMessage =
                    " Error code : " +
                    response.status +
                    " : " +
                    response.statusText +
                    "/nMessage : ";
                return response.text().then((errorMessage) => {
                    fullErrorMessage += errorMessage;
                    return fullErrorMessage;
                });
            }
            return response.json();
        }).then((data) => {
            userList.innerHTML='';
            listRenderer(data);
        });

    } else {
        return userList.innerHTML = '';
    }
};

export default UserList;
