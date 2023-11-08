searchDetailAddrFromCoords(
  new kakao.maps.LatLng(parseFloat(datas[i][1]), parseFloat(datas[i][2])),
  function (result, status) {
    const garbage_list = document.getElementById("garbage_list");
    if (status === kakao.maps.services.Status.OK) {
      var detailAddr = !!result[0].road_address
        ? result[0].road_address.address_name
        : "";
      detailAddr += result[0].address.address_name;

      item = `<div class="garbage_item">
          <img class="photo" src="/photo/${datas[i][7]}" alt="" />
            <div>
              <h4>${detailAddr}</h4>
            </div>
            <div>자신과 떨어진 위치 : ${datas[i][8]}m</div>
            <div class="goMapBox">
            <span
            class="goMap" onClick="move();">경로이동</span>
            </div>
        </div>`;

      garbage_list.insertAdjacentHTML("beforeend", item);
    }
  }
);
