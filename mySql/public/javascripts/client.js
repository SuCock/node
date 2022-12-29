const url = "/customers";
//전체조회
selectAll(); //전체조회
insert(); //등록버튼에 이벤트 지정
customerDelete();
updateDate();
function selectAll() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //list클리어
      list.innerHTML = "";
      for (let i = 0; i < res.length; i++) {
        let data = `<tr data-id='${res[i].id}'>
        <td><input type="checkbox" /></td>
        <td>${res[i].id}</td>
        <td>${res[i].name}</td>
        <td>${res[i].email}</td>
        <td>${res[i].phone}</td>
        <td>${res[i].address}</td>
        <td><button id="delbtn">삭제</button></td>
        <td><button id="selbtn">조회</button></td>
        </tr>`;
        list.innerHTML += data;
      }
    });
}
//등록
function insert() {
  addbtn.addEventListener("click", function () {
    let data = {
      name: username.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        selectAll();
      });
  });
}
//수정
function updateDate() {
  updbtn.addEventListener("click", function (ev) {
    let data = {
      id: userid.value,
      name: username.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(`${url}/${userid.value}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        selectAll();
      });
  });
}

//삭제
function customerDelete() {
  list.addEventListener("click", function (ev) {
    if (ev.target.id == "selbtn") {
      //단건조회
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((res) => {
          userid.value = res.id; //수정할때 id값 필수
          username.value = res.name;
          email.value = res.email;
          phone.value = res.phone;
          address.value = res.address;
        });
    } else if (ev.target.id == "delbtn") {
      //삭제
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`, { method: "delete" }).then(() => {
        selectAll();
      });
    }
  });
}
//단건조회
